import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("likes", schema);

export default model;
