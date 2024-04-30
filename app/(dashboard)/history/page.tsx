import HistoryChart from '@/components/HistoryChart'
import {getUserByClerkId} from '@/utils/auth'
import {prisma} from '@/utils/db'

const getData = async () => {
    const user = (await getUserByClerkId())!
    const analyses = await prisma.analysis.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            createdAt: 'asc',
        },
    })
    const total = analyses.reduce((acc, curr) => {
        return acc + curr.sentimentScore
    }, 0)
    const average = total / analyses.length
    return {analyses, average}
}

const History = async () => {
    const {analyses, average} = await getData();
    return (
        <div className="h-screen px-2 py-3 md:px-6 md:py-8 m-2">
            <div>
                <h1 className="text-lg md:text-2xl mb-2 text-stone-500">{`Avg. Sentiment Score: ${average}`}</h1>
            </div>
            <div className="h-5/6 max-h-screen w-full">
                {
                    analyses && <HistoryChart data={analyses} />
                }
            </div>
        </div>
    )
}


export const metadata = {
    title: 'Graphical Analysis',
    description: 'A plot of your mood over time',
}

export default History