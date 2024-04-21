"use client"
import {createNewEntry} from '@/utils/api';
import {useRouter} from 'next/navigation';
import {useState} from 'react'

const NewEntryEditor = () => {
    const [value, setValue] = useState('');
    const router = useRouter()

    const handleOnClick = async () => {
        const data = await createNewEntry(value)
        router.push(`/journal/${data.id}`)
    }

    return (
        <div className='w-full h-full grid grid-cols-3'>
            <div className='h-full col-span-2'>
                <textarea
                    className='w-full h-full px-8 text-xl'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder='How was your day?...'
                    autoFocus={true} />
            </div>
            <div>
                <button
                    className='mx-4 my-8 px-2 py-2 text-xl rounded-md cursor-pointer bg-gray-400/50 hover:bg-gray-500/50 transition-transform hover:scale-105'
                    onClick={handleOnClick}>
                    Create New Entry
                </button>
            </div>
        </div>
    )
}

export default NewEntryEditor