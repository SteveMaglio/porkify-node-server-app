import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    albumId: String,
    title: String,
  },
  { collection: "likes" }
);

export default schema;
