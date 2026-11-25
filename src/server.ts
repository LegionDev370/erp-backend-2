import express from "express";
import { Routes } from "./routes/index.ts";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(express.json());
app.use(Routes());

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}: http://localhost:${PORT}`);
});
