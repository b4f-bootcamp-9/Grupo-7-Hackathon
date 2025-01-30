import { ReadUser } from "@/services/adminServices";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  const res = await ReadUser(data);

  if (res === false) {
    return NextResponse.json({ response: "ERROR" }, { status: 401 });
  }

  return NextResponse.json({ response: "SUCESSO" }, { status: 200 });
}
