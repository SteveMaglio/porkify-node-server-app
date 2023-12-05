import model from "./model.js";
import model from "../users/model.js";
export const createReview = (Review) => model.create(Review);
export const findAllReviews = () => model.find();
export const findReviewByUserId = (UserId) => model.findById(UserId);
export const deleteReview = (ReviewId) =>
  model.deleteOne({ _id: ReviewId });