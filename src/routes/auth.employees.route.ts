import { Router } from "express";
import AuthEmployeesController from "../controllers/auth.employees.controller.ts";

const authEmployeesRouter = Router();

const authEmployessController = new AuthEmployeesController();

authEmployeesRouter.post(
  "/auth/employees/register",
  authEmployessController.register.bind(authEmployessController),
);
authEmployeesRouter.post(
  "auth/employees/login",
  authEmployessController.login.bind(authEmployessController),
);
authEmployeesRouter.post(
  "auth/employees/logout",
  authEmployessController.logout.bind(authEmployessController),
);

export default authEmployeesRouter;
