import Question from '@/components/Question'
import {Skeleton} from '@radix-ui/themes'
import React from 'react'

const JournelLoading = () => {
    const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="px-2 py-2 md:px-6 md:py-8 bg-zinc-100/50 h-full w-full">
            <h2 className="flex justify-between mb-4 md:mb-8 text-lg md:text-2xl lg:text-3xl text-center">
                <span className="px-2 py-2 md:px-4 md:py-5 font-semibold italic text-stone-700">Your Memoirs...</span>
                <div className="bg-stone-300/40 hover:bg-stone-300/80 px-2 py-2 md:px-4 md:py-5 cursor-pointer overflow-hidden rounded-lg shadow font-semibold italic">
                    <span>New Entry</span>
                </div>
            </h2>
            <div className="px-2 my-2 md:my-8">
                <Question />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    entries.map(entry =>
                    (
                        <div className="size-72 bg-yellow-200/50 overflow-hidden rounded-lg shadow mx-auto" key={entry}>
                            <div className="px-2 py-5 sm:p-4 h-1/6 text-orange-400 w-40"><Skeleton>Date TimeStamp</Skeleton></div>
                            <div className="px-2 py-5 sm:p-4 h-4/6 w-40"><p ><Skeleton>Lorem ipsum dolor sit amet consectetur, adipisicing elit.endis amet?</Skeleton></p></div>
                            <div className="px-2 py-2 sm:px-4 font-semibold italic h-1/6 w-40"><Skeleton>Pika</Skeleton></div>
                        </div>
                    )

                    )}
            </div>
        </div>
    )
}

export default JournelLoading