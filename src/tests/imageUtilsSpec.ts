import { deleteFile } from "../utilities/file_utils";
import { resizeImage, getImageMetadata } from "../utilities/image_utils";
import path from "path";

describe("Test image resizing", () => {
  const inputFile = path.join(__dirname, "/test_assets/test_image.jpeg");
  const outputFile = path.join(
    __dirname,
    "/test_assets/test_image_output.jpeg"
  );

  for (let i = 0; i < 4; i++) {
    const widths = [100, 200, 300, 400];
    const heights = [100, 200, 300, 400];

    it(`should resize the image to width ${widths[i]} and height ${heights[i]}`, async () => {
      resizeImage(inputFile, outputFile, widths[i], heights[i]);

      setTimeout(async () => {
        const imageData = await getImageMetadata(outputFile);
        expect(imageData["width"]).toBe(widths[i]);
        expect(imageData["height"]).toBe(heights[i]);
      }, 2000);
    });

    afterEach(async () => {
      await deleteFile(outputFile);
    });
  }
});
