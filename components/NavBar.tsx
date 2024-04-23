"use client"

import {UserButton} from '@clerk/nextjs'
import Link from 'next/link'

const NavBar = () => {
    const links = [
        {href: '/', label: 'DailyVibeTracker'},
        {href: '/journal', label: 'Journal'},
        {href: '/history', label: 'History'},
    ]

    return (
        <div className="bg-stone-700 w-full min-h-10 px-1 md:px-4">
            <div className="flex h-5 items-center justify-between pt-4">
                {
                    links.map((link) => (
                        <Link key={link.href} href={link.href} className="text-white text-sm md:text-xl lg:text-2xl py-2 hover:text-gray-200 font-mono font-bold">{link.label}</Link>
                    ))
                }
                <div className="text-white py-2 min-w-2 md:min-w-4"><UserButton afterSignOutUrl='/' /></div>
            </div>

        </div>
    )
}

export default NavBar