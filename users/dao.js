import model from "./model.js";

export const findAllUsers = () => model.find();
export const findUserById = (id) => model.findById(id); // model.find({ _id: id });
export const findUserByUsername = (username) => model.findOne({ username }); // model.find({ username: username });
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });
export const createUser = (user) => model.create(user);
export const updateUser = (uid, user) =>
  model.updateOne({ _id: uid }, { $set: user });
export const deleteUser = (uid) => model.deleteOne({ _id: uid });
