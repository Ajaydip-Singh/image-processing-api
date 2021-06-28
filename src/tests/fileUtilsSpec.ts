import { existsFile } from "../utilities/file_utils";

describe("Test file utility functions", () => {
  const test_file = __dirname + "/test_assets/test_image.jpeg";

  it("should check if a file exists", async () => {
    const result = await existsFile(test_file);
    expect(result).toBe(true);
  });
});
