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

    return (
        <Editor entry={entry!} />
    )
}


export const metadata = {
    title: 'Entry Details',
    description: 'Complete analysis of your entry',
}
export default EntryPage