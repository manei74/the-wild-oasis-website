import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const file = path.join(process.cwd(), "public", "data", "countries.json");
  const json = await fs.readFile(file, "utf-8");
  return NextResponse.json(JSON.parse(json));
}
