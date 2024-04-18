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
            user: true
        }
    })
    return entry
}
const EntryPage = async ({params}: {params: {id: string}}) => {
    const entry = await getEntry(params.id);
    return (
        <div className='w-full h-full outline-none'>
            <Editor entry={entry!} />
        </div>
    )
}

export default EntryPage