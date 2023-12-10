import model from "./model.js";
export const createSong = (song) => model.create(song);
export const findAllSongs = () => model.find();
export const findSongBySpotifyId = (songId) => model.findById(songId);
export const findSongById = (spotify_id) => model.findById(spotify_id);
export const findSongByTitle = (title) =>
  model.findOne({ title: title });
export const updateSong = (songId, song) =>
  model.updateOne({ _id: songId }, { $set: song });
export const deleteSong = (songId) =>
  model.deleteOne({ _id: songId });
