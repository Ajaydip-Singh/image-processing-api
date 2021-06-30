import express from "express";
import { resizeImage } from "../../utilities/image_utils";
import { existsFile } from "../../utilities/file_utils";
import path from "path";

const resizeImageRoute = express.Router();

// setup base path where images are stored
const assetsDir = path.resolve(__dirname, "../../../assets");

resizeImageRoute.get("/", async (req, res) => {
  const filename = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;

  // create the input path of the image
  const inputPath = path.join(assetsDir, "full", `${String(filename)}.jpeg`);
  // check if image exists in the full folder in assets
//   const inputImageExists = await existsFile(inputPath);
//   if (!inputImageExists) {
//     res.status(400);
//     res.send("Image file does not exist");
//   } else {
//     const outputPath = path.join(
//       assetsDir,
//       "embed",
//       `${String(filename)}_${width}_${height}.jpeg`
//     );
//     // Check if output image already exists so we don't need to resize it
//     const outputImageExists = await existsFile(outputPath);
//     if (!outputImageExists) {
//       resizeImage(inputPath, outputPath, Number(width), Number(height));
//     }
//   }
});

export default resizeImageRoute;
