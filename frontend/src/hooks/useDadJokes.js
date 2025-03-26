import axios from "axios";
import { useState, useEffect } from "react";

export default function useDadJokes() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchJokes() {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:3000/api/dad-jokes/");
      setJokes(response.data);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJokes();
  }, []);

  async function addJoke(joke) {
    const oldJokes = jokes;
    setJokes([...oldJokes, joke]);
    setError(null);
    try {
      const response = await axios.post("http://localhost:3000/api/dad-jokes/", { joke });
      setJokes([...oldJokes, response.data]);
    } catch (error) {
      setError(error.response.data);
      setJokes(oldJokes);
    }
  }

  async function deleteJoke(_id) {
    const oldJokes = jokes;
    setJokes(oldJokes.filter((joke) => joke._id !== _id));
    setError(null);
    try {
      await axios.delete(`http://localhost:3000/api/dad-jokes/${_id}`);
    } catch (error) {
      setError(error.response.data);
      setJokes(oldJokes);
    }
  }

  return { jokes, loading, error, addJoke, deleteJoke };
}
