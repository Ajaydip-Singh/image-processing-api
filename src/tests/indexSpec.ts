import supertest from "supertest";
import app from "../index";
import path from "path";
import { deleteFile } from "../utilities/file_utils";

const request = supertest(app);

describe("Test /api/resize-image endpoint", () => {
  const testImageOutputPath = path.resolve(
    __dirname,
    "../../assets/embed/test-image_400_400.jpeg"
  );

  describe("Test existence of query string parameters", () => {
    it("should get status code 400 for request without any string parameters", async () => {
      const response = await request.get("/api/resize-image");
      expect(response.status).toBe(400);
    });

    it("should get status code 400 for request without filename string parameter", async () => {
      const response = await request.get(
        "/api/resize-image?width=200&height=200"
      );
      expect(response.status).toBe(400);
    });

    it("should get status code 400 for request without height string parameter", async () => {
      const response = await request.get(
        "/api/resize-image?filename=test-image&width=200"
      );
      expect(response.status).toBe(400);
    });

    it("should get status code 400 for request without width string parameter", async () => {
      const response = await request.get(
        "/api/resize-image?filename=test-image&height=200"
      );
      expect(response.status).toBe(400);
    });
  });

  describe("Test validity of query string parameters", () => {
    it("should get status code 200 if height and width parameters are positive integer", async () => {
      const response = await request.get(
        "/api/resize-image?filename=test-image&width=400&height=400"
      );
      expect(response.status).toBe(200);
    });

    it("should get status code 400 if filename does not exist in full directory", async () => {
      const response = await request.get(
        "/api/resize-image?filename=random-file&width=400&height=400"
      );
      expect(response.status).toBe(400);
    });

    it("should get status code 400 if height parameter is not an integer", async () => {
      const response = await request.get(
        "/api/resize-image?filename=test-image&width=200&height=abcd"
      );
      expect(response.status).toBe(400);
    });

    it("should get status code 400 if height parameter is negative", async () => {
      const response = await request.get(
        "/api/resize-image?filename=test-image&width=200&height=-100"
      );
      expect(response.status).toBe(400);
    });

    it("should get status code 400 if width parameter is not an integer", async () => {
      const response = await request.get(
        "/api/resize-image?filename=test-image&width=abcd&height=100"
      );
      expect(response.status).toBe(400);
    });

    it("should get status code 400 if width parameter is negative", async () => {
      const response = await request.get(
        "/api/resize-image?filename=test-image&width=-200&height=100"
      );
      expect(response.status).toBe(400);
    });

    it("should get status code 400 if width parameter is negative", async () => {
      const response = await request.get(
        "/api/resize-image?filename=test-image&width=-200&height=100"
      );
      expect(response.status).toBe(400);
    });

    afterAll(async () => {
      deleteFile(testImageOutputPath);
    });
  });

  describe("Test image resizing process in endpoint", () => {
    it("should get status code 200 for resizing an image that exists", async () => {
      const response = await request.get(
        "/api/resize-image?filename=test-image&width=400&height=400"
      );
      expect(response.status).toBe(200);
    });

    it("should get status code 400 if height parameter is too large for jpeg resizing", async () => {
      const response = await request.get(
        "/api/resize-image?filename=test-image&width=400&height=1000000"
      );
      expect(response.status).toBe(400);
    });

    it("should get status code 400 if width parameter is too large for jpeg resizing", async () => {
      const response = await request.get(
        "/api/resize-image?filename=test-image&width=1000000&height=400"
      );
      expect(response.status).toBe(400);
    });

    afterAll(async () => {
      deleteFile(testImageOutputPath);
    });
  });
});
