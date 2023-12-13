import * as dao from "./dao.js";
let currentUser = null;
function ReviewRoutes(app) {
  const createReview = async (req, res) => {
    const review = await dao.createReview(req.body);
    res.json(review);
  };

  const findAllReviews = async (req, res) => {
    const reviews = await dao.findAllReviews();
    res.json(reviews);
  };

  const updateReview = async (req, res) => {
    const { reviewId } = req.params;
    const status = await dao.updateReview(reviewId, req.body);
    const currentReview = await dao.findReviewById(reviewId);
    req.session['currentReview'] = currentReview;
    res.json(status);
  };

  const findReviewById = async (req, res) => {
    const review = await dao.findReviewById(req.params.reviewId);
    res.json(review);
  };

  const findReviewsByUserId = async (req, res) => {
    const reviews = await dao.findReviewsByUserId(req.params.userId);
    res.json(reviews);
  };  

  const deleteReview = async (req, res) => {
    const status = await dao.deleteReview(req.params.reviewId);
    res.json(status);
  };


  app.post("/api/reviews", createReview);
  app.get("/api/reviews", findAllReviews);
  app.get("/api/users/:userId/reviews", findReviewsByUserId);
  app.get("/api/reviews/:reviewId", findReviewById);
  app.put("/api/reviews/:reviewId", updateReview);
  app.delete("/api/reviews/:reviewId", deleteReview);

}
export default ReviewRoutes;
