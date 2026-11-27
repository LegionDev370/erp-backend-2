import "dotenv/config";
import jwt, { type SignOptions } from "jsonwebtoken";

export interface ITokenPayload {
  id: number | string;
  username: string;
  role: string;
}

function getAccessSecret(): string {
  const secret = process.env["JWT_ACCESS_SECRET"];
  if (!secret) {
    throw new Error("JWT_ACCESS_SECRET .env faylida ko'rsatilishi kerak");
  }
  return secret;
}

function getRefreshSecret(): string {
  const secret = process.env["JWT_REFRESH_SECRET"];
  if (!secret) {
    throw new Error("JWT_REFRESH_SECRET .env faylida ko'rsatilishi kerak");
  }
  return secret;
}

export function generateAccessToken(payload: ITokenPayload): string {
  const expiresIn = (process.env["JWT_ACCESS_EXPIRES_IN"] ||
    "24h") as SignOptions["expiresIn"];

  return jwt.sign(payload, getAccessSecret(), { expiresIn });
}

export function generateRefreshToken(payload: ITokenPayload): string {
  const expiresIn = (process.env["JWT_REFRESH_EXPIRES_IN"] ||
    "7d") as SignOptions["expiresIn"];

  return jwt.sign(payload, getRefreshSecret(), { expiresIn });
}

export function generateTokens(payload: ITokenPayload) {
  return {
    accessToken: generateAccessToken(payload),
    refreshToken: generateRefreshToken(payload),
  };
}
