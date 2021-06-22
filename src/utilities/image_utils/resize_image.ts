import sharp, { FitEnum } from "sharp";

/* 
Resize image based on input parameters. 
By default the image is resized based on 
the cover option and position center. 
*/
const resizeImage = (
  inputImagePath: string,
  outputImagePath: string,
  width: number,
  height: number,
  resizeOption = "cover",
  position = "centre"
): void => {
  sharp(inputImagePath)
    .resize(width, height, {
      fit: resizeOption as keyof FitEnum,
      position: position,
    })
    .toFile(outputImagePath, (err) => {
      console.log(err);
    });
};

export default resizeImage;
