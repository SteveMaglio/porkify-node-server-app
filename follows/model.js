import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("follows", schema);

export default model;
