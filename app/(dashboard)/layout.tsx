import {UserButton} from '@clerk/nextjs'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='h-screen w-screen relative'>
            <aside className='absolute top-0 left-0 h-full border-r border-black/5 w-[200px]'>
                Mood
            </aside>
            <div className='ml-[200px] h-full w-[calc(100vw-200px)]'>
                <header className='h-[50px] border-b border-black/5'>
                    <div className="h-full w-full px-6 flex items-center justify-end">
                        <UserButton />
                    </div>
                </header>
                <div className="h-[calc(100vh-60px)]">{children}</div>
            </div>
        </div>
    )
}

export default layout