import {Skeleton} from '@radix-ui/themes'
import React from 'react'



const EntryLoadingPage = () => {
    const analysisData = [1, 2, 3, 4, 5]
    return (
        <div className='w-full h-screen outline-none grid grid-cols-2 md:grid-cols-3 p-4 md:p-8'>
            <div className='w-full h-full col-span-1 md:col-span-2 py-1 px-2'>
                <div
                    className='w-full h-full px-2 md:px-8 text-sm md:text-xl'
                    autoFocus={true}>
                    <Skeleton >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum asperiores perferendis consectetur inventore omnis aut impedit quia cum,
                        praesentium placeat delectus? Nostrum magni quod eveniet voluptate cum officia,
                        dolorem tenetur.loremperferendis consectetur inventore omnis aut impedit quia cum,
                        praesentium placeat delectus?praesentium placeat delectus?praesentium placeat delectus?
                        praesentium placeat delectus?praesentium placeat delectus?praesentium placeat delectus?
                        praesentium placeat delectus?praesentium placeat delectus?praesentium placeat delectus?
                        praesentium placeat delectus?praesentium placeat delectus?praesentium placeat delectus?
                        praesentium placeat delectus?praesentium placeat delectus?praesentium placeat delectus?
                        praesentium placeat delectus?praesentium placeat delectus?praesentium placeat delectus?
                        praesentium placeat delectus?praesentium placeat delectus?praesentium placeat delectus?
                        praesentium placeat delectus?praesentium placeat delectus?praesentium placeat delectus?
                    </Skeleton>
                </div>
            </div>
            <div className='border-l border-black/10 h-full rounded-lg bg-stone-200/40'>
                <div className='px-2 py-3 md:px-6 md:py-10 rounded-t-lg'>
                    <h2 className='text-lg md:text-3xl font-semibold'>Analysis</h2>
                </div>
                <div>
                    <ul className='flex flex-col'>
                        {analysisData.map((data) => (
                            <li key={data} className='items-center border-y-2 border-black/5 px-2'>
                                <span className='text-base md:text-lg font-semibold'><Skeleton>sdfsfdfg</Skeleton></span>
                                <p className='text-sm md:text-lg overflow-hidden'><Skeleton>sdfsfdfg</Skeleton></p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EntryLoadingPage