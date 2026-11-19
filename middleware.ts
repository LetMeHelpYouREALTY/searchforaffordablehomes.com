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

  // Defense in depth: next.config already does single-hop apex+legacy first.
  // Middleware still collapses chains in environments where host redirects differ.
  if (legacyDestination) {
    const target = new URL(`${PRIMARY_ORIGIN}${legacyDestination}${search}`);
    return NextResponse.redirect(target, 308);
  }

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
    // Include `/` so apex homepage is handled when next.config host rules differ
    "/",
    "/((?!api|_next/static|_next/image|favicon|images|videos|robots|sitemap).*)",
  ],
};
