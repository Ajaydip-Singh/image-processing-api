import { existsFile } from "../utilities/file_utils";

describe("Test file utility functions", () => {
  const test_file = __dirname + "/test_assets/test_image.jpeg";

  it("should not throw error if a file exists", async () => {
    expect(await existsFile(test_file)).not.toThrowError;
  });

  it("should throw error if a file does not exist", async () => {
    expect(await existsFile("random.jpeg")).toThrowError;
  });
});
