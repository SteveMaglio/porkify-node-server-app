import model from "./model.js";
import mongoose from "mongoose";
export const createUser = (user) => model.create(user);
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(new mongoose.Types.ObjectId(userId));
export const findUserByUsername = (username) =>
  model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });
export const updateUser = (userId, user) =>
  model.updateOne({ _id: new mongoose.Types.ObjectId(userId) }, { $set: user });
export const deleteUser = (userId) =>
  model.deleteOne({ _id: new mongoose.Types.ObjectId(userId) });
