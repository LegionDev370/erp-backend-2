import type { NextFunction, Request, Response } from "express";
import { AuthStudentService } from "../services/auth.student.service.ts";

export class AuthStudentController {
  private authStudentService: AuthStudentService;

  constructor(authStudentService = new AuthStudentService()) {
    this.authStudentService = authStudentService;
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).json({ message: "Student register" });
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ message: "Student login" });
    } catch (error) {
      next(error);
    }
  };

  logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ message: "Student logout" });
    } catch (error) {
      next(error);
    }
  };
}

export default new AuthStudentController();
