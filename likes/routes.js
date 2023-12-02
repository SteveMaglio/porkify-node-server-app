import * as dao from "./dao.js";

function LikesRoutes(app) {
  const createUserLikesAlbum = async (req, res) => {
    const { userId, albumId, title } = req.params;
    if (userId === undefined) {
      const user = req.session.currentUser._id;
      const like = await dao.createUserLikesAlbum(user, albumId, title);
      res.json(like);
      return;
    }
    const like = await dao.createUserLikesAlbum(userId, albumId, title);
    res.json(like);
  };
  const deleteUserLikesAlbum = async (req, res) => {
    const { userId, albumId } = req.params;
    if (userId === undefined) {
      const user = req.session.currentUser._id;
      const status = await dao.deleteUserLikesAlbum(userId, albumId);
      res.json(status);
      return;
    }
    const status = await dao.deleteUserLikesAlbum(userId, albumId);
    res.json(status);
  };
  const findUsersLikedAlbum = async (req, res) => {
    const { albumId } = req.params;
    const users = await dao.findUsersLikedAlbum(albumId);
    res.json(users);
  };
  const findAlbumsLikedByUser = async (req, res) => {
    const { userId } = req.params;
    const albums = await dao.findAlbumsLikedByUser(userId);
    res.json(albums);
  };

  app.post("/api/users/:userId/likes/:albumId", createUserLikesAlbum);
  app.post("/api/users/likes/:albumId/title/:title", createUserLikesAlbum);
  app.delete("/api/users/:userId/likes/:albumId", deleteUserLikesAlbum);
  app.delete("/api/users/likes/:albumId", deleteUserLikesAlbum);
  app.get("/api/albums/:albumId/likes", findUsersLikedAlbum);
  app.get("/api/users/:userId/likes", findAlbumsLikedByUser);
}

export default LikesRoutes;
