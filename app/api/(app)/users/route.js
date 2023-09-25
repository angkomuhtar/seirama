import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const data = await prisma.user.findMany();
  return NextResponse.json({ message: data }, { status: 200 });
}
