import { findSongById, findSongBySpotifyId } from "../songs/dao.js";
import { findUserById } from "../users/dao.js";
import * as dao from "./dao.js";
let currentUser = null;
function ReviewRoutes(app) {
  const createReview = async (req, res) => {
    try {
      const review = await dao.createReview(req.body);
      res.json(review);
    } catch (e) {
      console.log(e);
    }
  };
  

  const findAllReviews = async (req, res) => {


    const reviews = await dao.findAllReviews();
    res.json(reviews);
  };

  const updateReview = async (req, res) => {
    const { reviewId } = req.params;
    const status = await dao.updateReview(reviewId, req.body);
    const currentReview = await dao.findReviewById(reviewId);
    req.session["currentReview"] = currentReview;
    res.json(status);
  };

  const findReviewById = async (req, res) => {
    const review = await dao.findReviewById(req.params.reviewId);
    res.json(review);
  };

  const findReviewsByUserId = async (req, res) => {
    const reviews = await dao.findReviewsByUserId(req.params.userId);
    const songs = [];
    const user = await findUserById(req.params.userId);
    for (const review of reviews) {
      const song = await findSongById(review.song_id);
      songs.push({
        song: song,
        review: review,
        user: user,
      });
    }


    res.json(songs);
  };

  const findReviewsBySongId = async (req, res) => {
    const reviews = await dao.findReviewsBySongId(req.params.songId);
    res.json(reviews);
  };  

  const findReviewsBySpotifyId = async (req, res) => {

    const song = await findSongBySpotifyId(req.params.spotifyId);

    console.log("SPOTIFY ID", req.params.spotifyId);
    if (song) {
    console.log("SONG ID", song._id);

    const reviews = await dao.findReviewsBySongId(song._id);
    console.log("reviews", reviews);
    res.json(reviews);
    }
    else{
      res.json([]);
    }
  };  


  const averageSongReviewRating = async (req, res) => {
    const average = await dao.averageSongReviewRating(req.params.songId);
    res.json(average);
  };  

  const averageSongReviewRatingBySpotifyId = async (req, res) => {
    //const average = await dao.averageSongReviewRating(req.params.song._id);
    //res.json(average);


    const song = await findSongBySpotifyId(req.params.spotifyId);

    console.log("SPOTIFY ID", req.params.spotifyId);
    if (song) {
    console.log("SONG ID", song._id);

    const average = await dao.averageSongReviewRating(song._id);
    console.log("average", average);
    res.json(average);
    }
    else{
      res.json([]);
    }
  };  

  const findFavoritedReviewsByUserId = async (req, res) => {
    const favorited_reviews = await dao.findFavoritedReviewsByUserId(
      req.params.userId
    );
    res.json(favorited_reviews);
  };

  const deleteReview = async (req, res) => {
    const status = await dao.deleteReview(req.params.reviewId);
    res.json(status);
  };

  app.post("/api/reviews", createReview);
  app.get("/api/reviews", findAllReviews);
  app.get("/api/users/:userId/reviews", findReviewsByUserId);


  app.get("/api/songs/:songId/reviews", findReviewsBySongId);
  app.get("/api/songs/:spotifyId/spotify/reviews", findReviewsBySpotifyId);

  app.get("/api/songs/:songId/avgRating", averageSongReviewRating);
  app.get("/api/songs/:spotifyId/spotify/avgRating", averageSongReviewRatingBySpotifyId);
  
  app.get("/api/users/:userId/favorited_reviews", findFavoritedReviewsByUserId);
  app.get("/api/reviews/:reviewId", findReviewById);
  app.put("/api/reviews/:reviewId", updateReview);
  app.delete("/api/reviews/:reviewId", deleteReview);
}
export default ReviewRoutes;
