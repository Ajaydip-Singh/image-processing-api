import sharp, { FitEnum } from "sharp";

/* 
Resize image based on input parameters. 
By default the image is resized based on 
the cover option and position center. 
*/
export const resizeImage = async (
  inputImagePath: string,
  outputImagePath: string,
  width: number,
  height: number,
  resizeOption = "cover",
  position = "centre"
): Promise<void> => {
  await sharp(inputImagePath)
    .resize(width, height, {
      fit: resizeOption as keyof FitEnum,
      position: position,
    })
    .toFile(outputImagePath);
};

/* 
Gets image metadata
*/
export const getImageMetadata = async (
  imagePath: string
): Promise<sharp.Metadata> => {
  const result = await sharp(imagePath).metadata();
  return result;
};
