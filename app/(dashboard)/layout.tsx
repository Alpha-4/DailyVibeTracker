import {UserButton} from '@clerk/nextjs'
import Link from 'next/link'

const layout = ({children}: {children: React.ReactNode}) => {
    const links = [
        {href: '/', label: 'Home'},
        {href: '/journal', label: 'Journal'},
    ]

    return (
        <div className='h-screen w-screen relative'>
            <aside className='absolute top-0 left-0 h-full border-r border-black/5 w-[200px]'>
                <div className='py-2 px-2 text-xl border-gray-500 border-b-2'>Mood</div>
                <ul>
                    {links.map((link) => (
                        <li key={link.href} className="py-2 px-2 text-xl border-gray-500 border-b-2">
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <div className='ml-[200px] h-full w-[calc(100vw-200px)]'>
                <header className='h-[50px] border-b border-black/5'>
                    <div className="h-full w-full px-6 flex items-center justify-end">
                        <UserButton afterSignOutUrl='/' />
                    </div>
                </header>
                <div className="h-[calc(100vh-60px)]">{children}</div>
            </div>
        </div>
    )
}

export default layout