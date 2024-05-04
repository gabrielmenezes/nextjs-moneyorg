import { LogOutIcon, MenuIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { logout } from '@/app/actions/auth'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu'

const links = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Orçamento', href: '/dashboard/orcamento' },
    { name: 'Mês a Mês', href: '/dashboard/mesames' },
    { name: 'Dívidas', href: '/dashboard/dividas' },
    { name: 'Metas', href: '/dashboard/metas' },
]

export default function Navbar() {
    return (
        <nav className='w-full flex flex-row justify-between px-4 pt-2'>
            <ul className='gap-4 items-center hidden md:flex'>
                {links.map((link, index) => {
                    return (<li
                        key={index}
                        className='bg-slate-700 text-white px-2 py-0 m-0 rounded cursor-pointer hover:bg-slate-500 transition'
                    >
                        <Link href={link.href}>{link.name}</Link>
                    </li>)
                })}
            </ul>
            <DropdownMenu>
                <DropdownMenuTrigger className='block md:hidden'><MenuIcon /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    {links.map((link, index) => {
                        return (<DropdownMenuItem key={index}>
                            <Link href={link.href}>{link.name}</Link>
                        </DropdownMenuItem>)
                    })}

                </DropdownMenuContent>
            </DropdownMenu>
            <form action={logout}>
                <Button type="submit"><p className='px-2'>Sair </p><LogOutIcon /></Button>
            </form>
        </nav>
    )
}
