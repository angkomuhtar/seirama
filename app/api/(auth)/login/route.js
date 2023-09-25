import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  const { username, password } = await request.json();
  //   const hash = bcrypt.hashSync("secret", 10);

  const users = await prisma.user.findFirst({
    where: {
      OR: [
        {
          username: username,
        },
        { email: username },
      ],
    },
  });

  if (!users) {
    return NextResponse.json(
      { message: "Not Authorized" },
      { status: 401, statusText: "Not Authorized" }
    );
  }

  console.log(users.password);
  if (bcrypt.compareSync(password, users.password)) {
    return NextResponse.json(
      { message: "Login Successfull", data: users, token: "" },
      { status: 200, statusText: "Success" }
    );
  }

  return NextResponse.json(
    { message: "Not Authorized" },
    { status: 401, statusText: "Not Authorized" }
  );
}
