import type { IEmployee } from "../types/employees.type.ts";
import bcrypt from "bcrypt";
import { db } from "../prisma/db.ts";
import { generateUsername } from "../utils/generate.username.ts";
import { generatePassword } from "../utils/generate.password.ts";
import { generateTokens } from "../utils/generate.token.ts";
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

  async loginService(data: { username?: string; password?: string }) {
    const { username, password } = data ?? {};

    if (!username || !password) {
      throw {
        status: false,
        status_code: 400,
        error: {
          message: "Username va parol kiritilishi shart",
        },
      };
    }

    const employee = await db.orm.public.Employee.where({ username }).first();

    if (!employee || employee.deletedAt !== null) {
      throw {
        status: false,
        status_code: 401,
        error: {
          message: "Username yoki parol noto'g'ri",
        },
      };
    }

    if (employee.status === "BLOCKED") {
      throw {
        status: false,
        status_code: 403,
        error: {
          message: "Hisobingiz bloklangan",
        },
      };
    }

    const isPasswordValid = await bcrypt.compare(password, employee.password);

    if (!isPasswordValid) {
      throw {
        status: false,
        status_code: 401,
        error: {
          message: "Username yoki parol noto'g'ri",
        },
      };
    }

    await db.orm.public.Employee.where({ id: employee.id }).update({
      lastLoginAt: new Date(),
    });

    const { accessToken, refreshToken } = generateTokens({
      id: employee.id,
      username: employee.username,
      role: employee.role,
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}
