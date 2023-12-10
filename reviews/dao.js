import model from "./model.js";
export const createReview = (review) => model.create(review);
export const findAllReviews = () => model.find();
export const updateReview = (reviewId, review) =>
  model.updateOne({ _id: reviewId }, { $set: review });
//export const findReviewByUserId = (userId) => model.findById(userId);
export const findReviewById = (reviewId) => model.findById(reviewId);
export const deleteReview = (reviewId) =>
  model.deleteOne({ _id: reviewId });