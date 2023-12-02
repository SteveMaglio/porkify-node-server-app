import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    dob: { type: Date },
    doh: { type: Date, default: Date.now },
    role: {
      type: String,
      default: "USER",
      enum: ["ADMIN", "FACULTY", "STUDENT", "USER"],
    },
  },
  { collection: "users" }
);
export default schema;
