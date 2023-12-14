import mongoose from "mongoose";
const songSchema = new mongoose.Schema({
    spotify_id: String,
    title: String,
    artists: [String],
    genres: [String],
    album_name: String,
    release_date: Date,
    album_art_url: String,
    __v: Number
  },
  { collection: "songs" });
export default songSchema;