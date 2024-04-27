import {Skeleton} from '@radix-ui/themes'
import React from 'react'

const NewLoadingPage = () => {
    return (
        <div className='w-full h-full grid md:grid-cols-4 p-4 md:p-8'>
            <div className='min-h-80 md:min-h-96 h-full col-span-1 md:col-span-3'>
                <div className='w-full h-full px-8 text-sm md:text-xl py-1'>
                    <Skeleton >

                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum asperiores perferendis consectetur inventore omnis aut impedit quia cum,
                        praesentium placeat delectus? Nostrum magni quod eveniet voluptate cum officia,
                        dolorem tenetur.loremperferendis consectetur inventore omnis aut impedit quia cum,
                        praesentium placeat delectus?praesentium placeat delectus?praesentium placeat delectus
                        ?praesentium placeat delectus?praesentium placeat delectus?praesentium placeat delectus?
                        praesentium placeat delectus?praesentium placeat delectus?

                    </Skeleton>
                </div>
            </div>
            <div className='m-4 md:mx-12 px-2 text-sm md:text-xl rounded-md cursor-pointer bg-gray-400/50 hover:bg-gray-500/50 transition-transform hover:scale-105'>
                <Skeleton>Click Me</Skeleton>
            </div>
        </div>
    )
}

export default NewLoadingPage