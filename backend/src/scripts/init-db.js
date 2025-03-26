import "dotenv/config";
import mongoose from "mongoose";
import { DadJoke } from "../data/schema.js";

await mongoose.connect(process.env.DB_CONNECTION_STRING);
console.log("Connected to the database.");

await DadJoke.deleteMany({});

const dadJokes = [
    { joke: "What do you call a fake noodle? An impasta!" },
    { joke: "Why did the coffee file a police report? It got mugged." },
    { joke: "How does a penguin build its house? Igloos it together." },
    { joke: "Dad, did you get a haircut? No, I got them all cut!" },
    { joke: "I would avoid the sushi if I was you. It’s a little fishy." },
    { joke: "How do you organize a space party? You planet." }
]

const response = await DadJoke.insertMany(dadJokes);
console.log(`Inserted ${response.length} dad jokes into the database.`);

await mongoose.disconnect();
console.log("Disconnected from the database.");