import { promises as fs } from "fs";
import path from "path";

export async function getLocalData() {
  const filePath = path.join(process.cwd(), "src/lib/data.json");

  const file = await fs.readFile(filePath, "utf-8");

  const data = JSON.parse(file);

  return data;
}
