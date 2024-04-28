import {Skeleton} from '@radix-ui/themes'
import React from 'react'

const loading = () => {
    return (
        <div className="h-screen px-2 py-3 md:px-6 md:py-8 m-2">
            <div>
                <h1 className="text-lg md:text-2xl mb-2 text-stone-500">{`Avg. Sentiment Score:`}<Skeleton /></h1>
            </div>
            <div className="h-5/6 max-h-screen w-full">
                <Skeleton width={'100%'} height={'100%'}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ipsum quis
                    ea amet rem praesentium quo voluptate temporibus quibusdam similique re
                    rum incidunt, culpa omnis natus molestias, repellendus sed. In rem offic
                    ia aliquid cumque nobis repudiandae atque fugit, alias suscipit consequu
                    ntur porro adipisci modi harum omnis amet vitae voluptatum voluptate sin
                    t maxime. Voluptatem eligendi doloremque corrupti ut ipsum deserunt quod
                    sapiente illo culpa officiis id atque ex accusamus molestiae odit, cupi
                    ditate, harum ducimus obcaecati deleniti neque assumenda. Quisquam maxime,
                    ut quas vero eaque hic id consequuntur? At facilis suscipit laudantium maxime,
                    nobis nam obcaecati minima, eaque facere nesciunt veritatis commodi harum!
                </Skeleton>
            </div>
        </div>
    )
}

export default loading