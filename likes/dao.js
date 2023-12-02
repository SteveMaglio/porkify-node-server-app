import model from "./model.js";

export const createUserLikesAlbum = (userId, albumId, title) =>
  model.create({ user: userId, albumId, title });

export const deleteUserLikesAlbum = (userId, albumId) =>
  model.deleteOne({ user: userId, albumId });

export const findUsersLikedAlbum = (albumId) =>
  model.find({ albumId }).populate("user").exec();

export const findAlbumsLikedByUser = (userId) => model.find({ user: userId });
