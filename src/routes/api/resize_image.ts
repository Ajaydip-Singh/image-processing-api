import express from "express";
import { resizeImage } from "../../utilities/image_utils";
import { existsFile } from "../../utilities/file_utils";
import { queryStringChecker } from "../../middleware/query_string_checker";
import { ParameterValidator } from "../../utilities/param_validator_utils";
import path from "path";

const resizeImageRoute = express.Router();
const paramValidator = new ParameterValidator();

// setup base path where images are stored
const assetsDir = path.resolve(__dirname, "../../../assets");

resizeImageRoute.get(
  "/",
  queryStringChecker(["filename", "width", "height"]),
  async (req: express.Request, res: express.Response) => {
    try {
      paramValidator.validateString(String(req.query.filename), "Filename");
      paramValidator.validatePositiveInteger(Number(req.query.width), "Width");
      paramValidator.validatePositiveInteger(
        Number(req.query.height),
        "Height"
      );
    } catch (err) {
      console.log(err);
      res.status(400);
      res.send(String(err));
    }

    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;

    const inputPath = path.join(assetsDir, "full", `${String(filename)}.jpeg`);

    // check if image exists in the full folder in assets
    if (!(await existsFile(inputPath))) {
      res.status(400);
      res.send(`Image file ${filename} does not exist`);
    }

    const outputPath = path.join(
      assetsDir,
      "embed",
      `${String(filename)}_${width}_${height}.jpeg`
    );

    // check if output image already exists so we don't need to resize it
    if (!(await existsFile(outputPath))) {
      try {
        await resizeImage(inputPath, outputPath, Number(width), Number(height));
      } catch (err) {
        res.status(400);
        res.send(String(err));
      }
    }

    // send the resized file
    setTimeout(() => {
      res.sendFile(outputPath);
    }, 1000);
  }
);

export default resizeImageRoute;
