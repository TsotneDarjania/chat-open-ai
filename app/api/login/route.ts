import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  return NextResponse.json({ name: "tsotne" }, { status: 200 });
}
