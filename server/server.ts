import cors from "cors";
import express from "express";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*",
  })
);

// Healthcheck
app.get("/ping", (req, res) => res.status(200).json({ message: "pong" }));
app.listen(port, () => console.log(`Example app listening on port ${port}`));
