import { Router } from "express";
import authStudentController from "../controllers/auth.student.controller.ts";

const authStudentRouter = Router();

authStudentRouter.post(
  "/api/auth/students/register",
  authStudentController.register.bind(authStudentController),
);
authStudentRouter.post(
  "/api/auth/students/login",
  authStudentController.login.bind(authStudentController),
);
authStudentRouter.post(
  "/api/auth/students/logout",
  authStudentController.logout.bind(authStudentController),
);

export default authStudentRouter;
