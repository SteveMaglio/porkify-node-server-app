import * as dao from "./dao.js";
let currentSong = null;
function SongRoutes(app) {


  const createSong = async (req, res) => {
    const results = await dao.findSongBySpotifyId(req.body.spotify_id);

    if (!results) {
    const song = await dao.createSong(req.body);
    res.json(song);
    }
    else {
      res.json(results);
    }
  };

  const findAllSongs = async (req, res) => {
    const songs = await dao.findAllSongs();
    res.json(songs);
  };

  const findSongBySpotifyId = async (req, res) => {
    const song = await dao.findSongById(req.params.spotifyId);
    res.json(song);
  };

  const findSongById = async (req, res) => {
    const song = await dao.findSongById(req.params.songId);
    res.json(song);
  };

  const findSongByTitle = async (req, res) => {
    const song = await dao.findSongByTitle(req.params.title);
    res.json(song);
  };

  const updateSong = async (req, res) => {
    const { songId } = req.params;
    const status = await dao.updateSong(songId, req.body);
    const currentSong = await dao.findSongById(songId);
    req.session['currentSong'] = currentSong;
    res.json(status);
  };


  const deleteSong = async (req, res) => {
    const status = await dao.deleteSong(req.params.songId);
    res.json(status);
};

  app.post("/api/songs", createSong);
  app.get("/api/songs", findAllSongs);
  app.get("/api/songs/:songId", findSongById);
  app.get("/api/songs/:spotifyId", findSongBySpotifyId);
  app.get("/api/songs/:title", findSongByTitle);
  app.put("/api/songs/:songId", updateSong);
  app.delete("/api/songs/:songId", deleteSong);

}
export default SongRoutes;
