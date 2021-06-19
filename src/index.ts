import express from "express";
import routes from "./routes/index";

// Initialize server
const app = express();
// Set a port
const port = 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
