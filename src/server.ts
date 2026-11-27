import express from "express";
import type { Request, Response, NextFunction } from "express";
import { Routes } from "./routes/index.ts";
import cors from "cors";
import type { IERROR } from "./types/error.type.ts";
import { seedSuperAdmin } from "./seeds/employee.seeds.ts";
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
app.use(
  cors({
    origin: "http://localhost:5432",
    credentials: true,
  }),
);
app.use(express.json());
app.use("/api", Routes());
app.use((err: IERROR, req: Request, res: Response, next: NextFunction) => {
  if (err.status_code >= 500) {
    res.statusCode = err.status_code;
    return res.json({
      message: "INTERVAL SERVER ERROR",
    });
  }
  res.statusCode = err.status_code;
  //@ts-ignore
  delete err.status_code;
  res.json(err);
});

async function bootstrap() {
  await seedSuperAdmin();

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}: http://localhost:${PORT}`);
  });
}

bootstrap().catch((error) => {
  console.error("Server ishga tushirishda xatolik:", error);
  process.exit(1);
});
