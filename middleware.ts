// import type { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   switch (req.nextUrl.pathname) {
//     case "/event":
//     case "/event/lessons":
//       return NextResponse.redirect(new URL("/event/lessons/test", req.url));
//   }
// }

export default withAuth(
  function middleware(req) {
    const isAuthenticated = req.nextauth.token !== null;

    switch (req.nextUrl.pathname) {
      case "/event":
      case "/event/lessons":
        if (!isAuthenticated) {
          return NextResponse.redirect(new URL("/", req.url));
        }
        return NextResponse.redirect(new URL("/event/lessons/test", req.url));

      case "/":
        if (isAuthenticated) {
          return NextResponse.redirect(new URL("/event/lessons/test", req.url));
        }
    }

    if (req.nextUrl.pathname.includes("/event/lessons/")) {
      if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);
