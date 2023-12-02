function HelloRoutes(app) {
  const hello = (req, res) => {
    res.send("Life is good!");
  };
  app.get("/hello", hello);
}
export default HelloRoutes;
