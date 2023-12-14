import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    user_id:  { type: String, required: true},
    song_id:  { type: String, required: true},
    favorited:  { type: Boolean, required: true, default : false},
    rating:  { type: Number, required: true, default : 5.0},
    body:  {type: String, required: true},
    is_taken_down:  { type: Boolean, default : false},
    reason_for_taken_down:  { type: String, default : ""},
    album_art_url: { type: String, required: true}, 
    __v : Number
  },
  { collection: "reviews" });
export default reviewSchema;