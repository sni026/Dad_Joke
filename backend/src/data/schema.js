import mongoose from "mongoose";
const Schema = mongoose.Schema;

const dadJokesSchema = new Schema({
    joke: {
        type: String,
        required: true
    }
});

export const DadJoke = mongoose.model("DadJoke", dadJokesSchema);