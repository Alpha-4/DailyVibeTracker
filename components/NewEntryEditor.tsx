"use client"
import {createNewEntry} from '@/utils/api';
import {useRouter} from 'next/navigation';
import {useState} from 'react'

const NewEntryEditor = () => {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handleOnClick = async () => {
        setIsLoading(true)
        const data = await createNewEntry(value)
        //console.log("data>>>>>>" + JSON.stringify(data))
        setIsLoading(false)
        if (data && data.id) router.push(`/journal/${data.id}`)
        else router.push(`/journal`)
    }

    return (
        <div className='w-full h-full grid grid-cols-3 p-4 md:p-8'>
            <div className='min-h-80 md:min-h-96 h-full col-span-2'>
                {isLoading && <h2 className='text-xl text-green-500'>Saving....</h2>}
                <textarea
                    className='w-full h-full px-8 text-xl py-1'
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