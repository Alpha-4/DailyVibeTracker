"use client"

import {useRouter} from 'next/navigation'


const NewEntryCard = () => {
    const router = useRouter()

    const handleOnClick = async () => {
        router.push(`/journal/new`)
    }

    return (
        <div className="bg-stone-300/40 hover:bg-stone-300/80 px-4 py-5 cursor-pointer overflow-hidden rounded-lg shadow" onClick={handleOnClick}>
            <span>New Entry</span>
        </div>
    )
}

export default NewEntryCard