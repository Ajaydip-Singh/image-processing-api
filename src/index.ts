import express from "express";

// Initialize server
const app = express();
// Set a port
const port = 3000;

// Create test endpoint
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
