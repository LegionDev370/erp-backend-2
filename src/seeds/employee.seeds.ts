import "dotenv/config";
import bcrypt from "bcrypt";
import { db } from "../prisma/db.ts";

export async function seedSuperAdmin() {
  const username = process.env["SUPERADMINLOGIN"];
  const rawPassword = process.env["SUPERADMINPASSWORD"];

  if (!username || !rawPassword) {
    throw new Error(
      "SUPERADMINLOGIN va SUPERADMINPASSWORD .env faylida ko'rsatilishi kerak",
    );
  }

  const existing = await db.orm.public.Employee.where({ username }).first();

  if (existing) {
    console.log(
      `SuperAdmin allaqachon mavjud (id: ${existing.id}, username: ${existing.username})`,
    );
    return existing;
  }

  const hashedPassword = await bcrypt.hash(rawPassword, 10);

  const superAdmin = await db.orm.public.Employee.create({
    fullName: "Super Admin",
    username,
    password: hashedPassword,
    role: "SUPER_ADMIN",
    position: "Super Admin",
    status: "ACTIVE",
  });

  console.log(
    `SuperAdmin muvaffaqiyatli yaratildi (id: ${superAdmin.id}, username: ${superAdmin.username})`,
  );

  return superAdmin;
}
