import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: String,
    last_name: String,
    email: String,
    dob: Date,
    is_moderator: Boolean,
    biography: String,
  },
  { collection: "users" });
export default userSchema;