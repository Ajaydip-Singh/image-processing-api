import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Test /api/resize-image endpoint", () => {
  it("should get status code 400 for request without any string parameters", async () => {
    const response = await request.get("/api/resize-image");
    expect(response.status).toBe(400);
  });

  it("should get status code 400 for request without filename string parameter", async () => {
    const response = await request.get("/api/resize-image?width=200&heigh=200");
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
