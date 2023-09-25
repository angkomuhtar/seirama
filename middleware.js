import { NextResponse } from "next/server";
import { VerifyToken } from "./lib/auth";

export async function middleware(request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader && authHeader.split(" ")[1];

  const verified =
    token &&
    (await VerifyToken(token).catch((err) => {
      console.log(err);
    }));

  if (request.nextUrl.pathname.startsWith("/api/login")) {
    return NextResponse.next();
  }

  if (!verified) {
    return NextResponse.json(
      { message: "Not Authorize" },
      { status: 401, statusText: "not Authorize" }
    );
  }
}

export const config = {
  matcher: "/api/:path*",
};
