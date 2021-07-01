import express from "express";
import routes from "./routes/index";
import path from "path";

// Initialize server
const app = express();
// Set a port
const port = 3000;

app.use("/api", routes);

app.get("/api", (req: express.Request, res: express.Response): void => {
  const readmePath = path.resolve(__dirname, "../README.md");
  res.sendFile(readmePath);
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
