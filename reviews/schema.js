import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    user_id:  { type: String, required: true},
    song_id:  { type: String, required: true},
    favorited:  { type: Boolean, required: true, default : false},
    rating:  { type: String, required: true, default : 5.0},
    body:  {type: String, required: true},
    is_taken_down:  { type: String, required: true},
    reason_for_taken_down:  { type: String, required: true},
    __v : Number
  },
  { collection: "reviews" });
export default reviewSchema;