import NavBar from '@/components/NavBar'


const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='h-full w-full'>
            <NavBar />
            <div className='h-full w-full'>{children}</div>
        </div>
    )
}

export default layout