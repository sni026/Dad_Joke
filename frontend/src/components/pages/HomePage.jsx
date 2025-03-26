import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [joke, setJoke] = useState("");

  async function fetchJoke() {
    const response = await axios.get("http://localhost:3000/api/dad-jokes/random");
    setJoke(response.data.joke);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h1>Daily Dad Joke</h1>
      <main className={styles.main}>
        <p className={styles.joke}>{joke}</p>
        <button onClick={fetchJoke}>Tell me another!</button>
      </main>
    </div>
  );
}
