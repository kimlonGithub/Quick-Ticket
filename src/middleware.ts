import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;

  // If the path is already localized, let next-intl handle it
  if (
    pathname.startsWith("/en") ||
    pathname.startsWith("/zh") ||
    pathname.startsWith("/kh") ||
    pathname.startsWith("/ja") ||
    pathname.startsWith("/ko") ||
    pathname.startsWith("/th")
  ) {
    return intlMiddleware(request);
  }

  // If root path, redirect to /kh (default for root only)
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/kh", nextUrl));
  }

  // Otherwise, redirect to /en + pathname for all other non-localized paths
  return NextResponse.redirect(new URL(`/en${pathname}`, nextUrl));
}

export const config = {
  matcher: [
    "/en/:path*",
    "/zh/:path*",
    "/kh/:path*",
    "/ja/:path*",
    "/ko/:path*",
    "/th/:path*",
    "/",
  ],
};
