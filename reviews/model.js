import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("reviews", schema);
export default model;