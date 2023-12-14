import model from "./model.js";
export const createReview = (review) => model.create(review);
export const findAllReviews = () => model.find();
export const updateReview = (reviewId, review) =>
  model.updateOne({ _id: reviewId }, { $set: review });

export const findReviewsByUserId = (userId) => model.find({ user_id: userId });

export const findReviewsBySongId = (songId) => model.find({ song_id: songId });

export const averageSongReviewRating = async (songId) => {
  var allReviews = await findReviewsBySongId(songId);
  var sum = 0;
  var avg = 0.0;

  if (allReviews.length === 0) {
    return avg; // No reviews found, return 0 as the default average
  }

  for (let i = 0; i < allReviews.length; i++) {
    sum += allReviews[i].rating;
  }

  avg = sum / allReviews.length;

  return avg;
};

export const findFavoritedReviewsByUserId = (userId) =>
  model.find({ user_id: userId }).where("favorited").equals(true);

export const findReviewById = (reviewId) => model.findById(reviewId);
export const deleteReview = (reviewId) => model.deleteOne({ _id: reviewId });
