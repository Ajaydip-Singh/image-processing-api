import express from "express";
import resizeImageRoute from "./api/resize_image";

const routes = express.Router();

routes.use("/resize-image", resizeImageRoute);

export default routes;
