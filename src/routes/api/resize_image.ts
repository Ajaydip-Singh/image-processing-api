import express from "express";

const resizeImageRoute = express.Router();

resizeImageRoute.get("/", (req, res) => {
  res.send("Resize image path");
});

export default resizeImageRoute;
