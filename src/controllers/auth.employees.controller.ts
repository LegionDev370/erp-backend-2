import type { NextFunction, Request, Response } from "express";
import { AuthEmployeesService } from "../services/auth.employees.service.ts";

export class AuthEmployeesController {
  private readonly authEmployessService = new AuthEmployeesService();
  constructor() {}
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).json({ message: "Employee register" });
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ message: "Employee login" });
    } catch (error) {
      next(error);
    }
  };

  logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ message: "Employee logout" });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthEmployeesController;
