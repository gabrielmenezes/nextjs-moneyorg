import { decrypt } from "@/app/lib/session"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

const protectedRoutes = ['/dashboard', '/dashboard/dividas', '/dashboard/mesames', '/dashboard/metas', '/dashboard/orcamento']
const publicRoutes = ['/']


export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const cookie = cookies().get('session')?.value
    const session = await decrypt(cookie)

    if (isProtectedRoute && !session?.username) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    if (
        isPublicRoute &&
        session?.username &&
        !req.nextUrl.pathname.startsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}