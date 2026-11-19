import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  PRIMARY_ORIGIN,
  isApexSearchHost,
  resolveLegacyDestination,
} from "@/lib/legacy-redirects";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;
  const legacyDestination = resolveLegacyDestination(pathname);
  const apex = isApexSearchHost(hostname);

  // Single-hop: apex + legacy path → www final URL (no www-then-path chain)
  if (legacyDestination) {
    const target = new URL(`${PRIMARY_ORIGIN}${legacyDestination}${search}`);
    return NextResponse.redirect(target, 308);
  }

  // Apex non-legacy → www same path
  if (apex) {
    const target = new URL(`${PRIMARY_ORIGIN}${pathname}${search}`);
    return NextResponse.redirect(target, 308);
  }

  const response = NextResponse.next();
  // Pass hostname + pathname so layout metadata can set per-URL canonicals
  response.headers.set("x-domain", hostname);
  response.headers.set("x-pathname", pathname);
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon|images|videos|robots|sitemap).*)",
  ],
};
