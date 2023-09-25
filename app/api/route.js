import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const data = await prisma.user.findMany();
  return NextResponse.json({ message: data }, { status: 400 });

  // return NextResponse.json({ product });
}

export async function POST(request) {}
