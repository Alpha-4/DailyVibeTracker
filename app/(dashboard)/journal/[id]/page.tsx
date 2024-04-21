import Editor from '@/components/Editor'
import {getUserByClerkId} from '@/utils/auth';
import {prisma} from '@/utils/db';


const getEntry = async (id: string) => {
    const user = await getUserByClerkId();
    const entry = await prisma.journelEntry.findUnique({
        where: {
            id,
            userId: user?.id
        },
        include: {
            user: true,
            analysis: true
        }
    })

    return entry
}
const EntryPage = async ({params}: {params: {id: string}}) => {
    const entry = await getEntry(params.id);
    const analysisData = [
        {
            name: 'Summary',
            value: entry?.analysis?.summary || "summary"
        },
        {
            name: 'Emotions',
            value: (entry?.analysis?.negative === false) ? "positive" : "negative"
        },
        {
            name: 'Mood',
            value: entry?.analysis?.mood || "mood"
        },
    ]
    return (
        <div className='w-full h-full outline-none grid grid-cols-3'>
            <div className='col-span-2'>
                <Editor entry={entry!} />
            </div>
            <div className='border-l border-black/10'>
                <div className='bg-blue-500 px-6 py-10'>
                    <h2 className='text-3xl'>Analysis</h2>
                </div>
                <div>
                    <ul>
                        {analysisData.map((data) => (
                            <li key={data.name} className='flex justify-between items-center border-y-2 border-black/5 px-4'>
                                <span className='text-lg font-semibold'>{data.name}:</span>
                                <span>{data.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EntryPage