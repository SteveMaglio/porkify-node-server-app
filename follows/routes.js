import * as dao from "./dao.js";

function FollowsRoutes(app) {
  const createUserFollowsUser = async (req, res) => {
    const { followerId, followedId } = req.params;
    if (followerId === undefined) {
      const follower = req.session.currentUser._id;
      const follow = await dao.createUserFollowsUser(follower, followedId);
      res.json(follow);
      return;
    }
    const follow = await dao.createUserFollowsUser(followerId, followedId);
    res.json(follow);
  };
  const deleteUserFollowsUser = async (req, res) => {
    const { followerId, followedId } = req.params;
    const status = await dao.deleteUserFollowsUser(followerId, followedId);
    res.json(status);
  };
  const findUsersFollowingUser = async (req, res) => {
    const { followedId } = req.params;
    const users = await dao.findUsersFollowingUser(followedId);
    res.json(users);
  };
  const findUsersFollowedByUser = async (req, res) => {
    const { followerId } = req.params;
    const users = await dao.findUsersFollowedByUser(followerId);
    res.json(users);
  };

  app.post("/api/users/follows/:followedId", createUserFollowsUser);
  app.post("/api/users/:followerId/follows/:followedId", createUserFollowsUser);
  app.delete(
    "/api/users/:followerId/follows/:followedId",
    deleteUserFollowsUser
  );
  app.get("/api/users/:followedId/followers", findUsersFollowingUser);
  app.get("/api/users/:followerId/following", findUsersFollowedByUser);
}

export default FollowsRoutes;
