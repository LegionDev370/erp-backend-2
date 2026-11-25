import path from "path";
import { readFile, writeFile } from "fs/promises";

const rootDir = process.cwd();

export const readFileAsync = async (
  fileName: string,
): Promise<string | null> => {
  try {
    const filePath = path.join(rootDir, "src", "data", fileName);
    const data = await readFile(filePath, "utf-8");
    return data;
  } catch (error) {
    console.error("Faylni o'qishda xatolik:", error);
    return null;
  }
};

export const writeFileAsync = async (
  fileName: string,
  data: string,
): Promise<boolean> => {
  try {
    const filePath = path.join(rootDir, "src", "data", fileName);
    await writeFile(filePath, data, "utf-8");
    return true;
  } catch (error) {
    console.error("Faylga yozishda xatolik:", error);
    return false;
  }
};

