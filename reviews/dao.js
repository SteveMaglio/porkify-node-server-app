import model from "./model.js";
import mongoose from "mongoose";
export const createReview = (review) => model.create(review);
export const findAllReviews = () => model.find();
export const updateReview = (reviewId, review) =>
  model.updateOne({ _id: new mongoose.Types.ObjectId(reviewId) }, { $set: review });

export const findReviewsByUserId = (userId) => model.find({ user_id: userId });

export const findReviewsBySongId = async (songId) => {
  const reviews = await model.find({ song_id: songId });
  return reviews.reverse();
};


export const averageSongReviewRating = async (songId) => {
  var allReviews = await findReviewsBySongId(songId);
  var sum = 0;
  var avg = 0.0;

  if (allReviews.length === 0) {
    return avg; // No reviews found, return 0 as the default average
  }

  for (let i = 0; i < allReviews.length; i++) {

    console.log("RATING LOOP", allReviews[i].rating);
    sum += allReviews[i].rating;
  }


  console.log('SUM', sum);
  console.log('LEN', allReviews.length);
  avg = sum / allReviews.length;
  console.log('AVG', avg);

  return avg;
};

export const findFavoritedReviewsByUserId = (userId) =>
  model.find({ user_id: userId }).where("favorited").equals(true);

export const findReviewById = (reviewId) => model.findById(new mongoose.Types.ObjectId(reviewId));
export const deleteReview = (reviewId) => model.deleteOne({ _id: new mongoose.Types.ObjectId(reviewId) });
