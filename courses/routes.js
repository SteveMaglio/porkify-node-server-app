import Database from "../Database/index.js";
function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });

  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = Database.courses.find((c) => c._id === id);
    if (!course) {
      res.sendStatus(404);
      return;
    }
    Database.courses = Database.courses.filter((c) => c._id !== id);
    res.sendStatus(204);
  });

  app.post("/api/courses", (req, res) => {
    const course = { ...req.body, _id: new Date().getTime().toString() };
    Database.courses.push(course);
    res.send(course);
  });
  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    const currentCourse = Database.courses.find((c) => c._id === id);

    if (!currentCourse) {
      res.sendStatus(404);
      return;
    }

    Database.courses = Database.courses.map((c) =>
      c._id === id ? { c, ...course } : c
    );
    res.sendStatus(204);
  });
}
export default CourseRoutes;
