"use client"

import {useRouter} from 'next/navigation'


const NewEntryCard = () => {
    const router = useRouter()

    const handleOnClick = async () => {
        router.push(`/journal/new`)
    }

    return (
        <div className="bg-stone-300/40 hover:bg-stone-300/80 px-2 py-2 md:px-4 md:py-5 cursor-pointer overflow-hidden rounded-lg shadow font-semibold italic" onClick={handleOnClick}>
            <span>New Entry</span>
        </div>
    )
}

export default NewEntryCard