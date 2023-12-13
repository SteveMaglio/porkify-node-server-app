import model from "./model.js";
export const createReview = (review) => model.create(review);
export const findAllReviews = () => model.find();
export const updateReview = (reviewId, review) =>
  model.updateOne({ _id: reviewId }, { $set: review });

//TODO MAKE THIS QUERY WORK <3
export const findReviewsByUserId = (userId) => model.find().where("user_id").equals(userId);

export const findReviewById = (reviewId) => model.findById(reviewId);
export const deleteReview = (reviewId) =>
  model.deleteOne({ _id: reviewId });

