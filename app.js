import express from 'express'
import Hello from "./hello.js"
import lab5 from "./lab5.js"
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
lab5(app)
Hello(app)
CourseRoutes(app);
app.listen(process.env.PORT || 4000);