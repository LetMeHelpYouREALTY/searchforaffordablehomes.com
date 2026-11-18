import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isPreviewHost(hostname: string): boolean {
  const host = hostname.toLowerCase().split(":")[0];
  return (
    host.endsWith(".vercel.app") ||
    host.includes("localhost") ||
    host.endsWith(".local")
  );
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const response = NextResponse.next();
  // Pass hostname to pages via header so server components can read it
  response.headers.set("x-domain", hostname);

  // Never let preview / SSO hosts leak into the production index
  if (isPreviewHost(hostname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon|images|videos|robots|sitemap).*)",
  ],
};
