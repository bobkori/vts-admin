import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!_next|api/v1).*)(.+)", "/"],
};

const authPages = ["/login"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("token");
  if (!authPages.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  if (authPages.includes(pathname)) {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}
