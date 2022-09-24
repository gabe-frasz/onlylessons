import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/event/lessons/test", request.url));
}

export const config = {
  matcher: ["/event", "/event/lessons"],
};
