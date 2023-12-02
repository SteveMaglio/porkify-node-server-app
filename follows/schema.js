import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    followed: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { collection: "follows" }
);
export default schema;
