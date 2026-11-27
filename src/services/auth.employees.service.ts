import type { IEmployee } from "../types/employees.type";
import bcrypt from "bcrypt";
import { db } from "../prisma/db";
import { generateUsername } from "../utils/generate.username";
import { generatePassword } from "../utils/generate.password";
export class AuthEmployeesService {
  async registerService(data: IEmployee) {
    const username = data.email;
    try {
      const employee = await db.orm.public.Employee.where({ username }).first();
      if (!employee) {
        const user = generateUsername();
        const password = generatePassword();
        const hashedPassword = await bcrypt.hash(password, 12);
        const payload = {
          ...data,
          username: user,
          password: hashedPassword,
        };
        const res = (await db.orm.public.Employee.create(payload)).id;
        return res;
      }
    } catch (error) {
      throw {
        status: false,
        status_code: 401,
        error: {
          message: "Bunday employee tizimda mavjud",
        },
      };
    }
  }
}
