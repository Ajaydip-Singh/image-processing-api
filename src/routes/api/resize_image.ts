import express from "express";
import { resizeImage } from "../../utilities/image_utils";
import { existsFile } from "../../utilities/file_utils";
import path from "path";

const resizeImageRoute = express.Router();

// setup base path where images are stored
const assetsDir = path.resolve(__dirname, "../../../assets");

resizeImageRoute.get("/", async (req, res) => {
  // handle query string parameters
  if (req.query.filename == null) {
    res.status(400);
    res.send("Request missing filename query string parameter");
    return;
  }

  if (req.query.width == null) {
    res.status(400);
    res.send("Request missing width query string parameter");
    return;
  }

  if (req.query.height == null) {
    res.status(400);
    res.send("Request missing height query string parameter");
    return;
  }

  const filename = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;

  const inputPath = path.join(assetsDir, "full", `${String(filename)}.jpeg`);

  // check if image exists in the full folder in assets
  if (!(await existsFile(inputPath))) {
    res.status(400);
    res.send(`Image file ${filename} does not exist`);
    return;
  }

  const outputPath = path.join(
    assetsDir,
    "embed",
    `${String(filename)}_${width}_${height}.jpeg`
  );

  // check if output image already exists so we don't need to resize it
  if (!(await existsFile(outputPath))) {
    resizeImage(inputPath, outputPath, Number(width), Number(height));
  }

  // send the resized file
  setTimeout(() => {
    res.sendFile(outputPath);
  }, 1000);
});

export default resizeImageRoute;
