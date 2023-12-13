import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    user_id: String,
    song_id: String,
    favorited: Boolean,
    rating: Number,
    body: String,
    is_taken_down: Boolean,
    reason_for_taken_down: String
  },
  { collection: "reviews" });
export default userSchema;