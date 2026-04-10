import { NextRequest, NextResponse } from "next/server";
import { expectedToken } from "@/lib/auth-token";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const token = expectedToken();
    const auth = request.cookies.get("admin_auth");

    if (!token || !auth || auth.value !== token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
