"use client"
import {createNewEntry} from '@/utils/api';
import {Spinner} from '@radix-ui/themes';
import {useRouter} from 'next/navigation';
import {useState} from 'react'

const NewEntryEditor = () => {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handleOnClick = async () => {
        setIsLoading(true)
        const data = await createNewEntry(value)
        setIsLoading(false)
        if (data && data.id) router.push(`/journal/${data.id}`)
        else router.push(`/journal`)
    }

    return (
        <div className='w-full h-full grid md:grid-cols-4 p-4 md:p-8'>
            <div className='min-h-80 md:min-h-96 h-full col-span-1 md:col-span-3'>
                {isLoading && <h2 className='text-lg md:text-xl text-green-500'><Spinner />Saving....</h2>}
                <textarea
                    className='w-full h-full px-8 text-sm md:text-xl py-1'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder='How was your day?...'
                    autoFocus={true} />
            </div>
            <div>
                <button
                    className='m-4 md:mx-12 px-2 text-sm md:text-xl rounded-md cursor-pointer bg-gray-400/50 hover:bg-gray-500/50 transition-transform hover:scale-105'
                    onClick={handleOnClick}
                    disabled={isLoading}>
                    Create New Entry
                </button>
            </div>
        </div>
    )
}

export default NewEntryEditor