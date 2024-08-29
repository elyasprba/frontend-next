import { NextResponse, NextRequest } from 'next/server'
import { LS_KEYS } from './app/utils/cookies'

export function middleware(request: NextRequest) {
  const getToken = request.cookies.get(LS_KEYS.auth)?.value || null

  const token = JSON.parse(getToken!)

  const privateRoutes = ['/dashboard', '/profile']

  const isPrivateRoute = privateRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  )

  if (!token && isPrivateRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
}
