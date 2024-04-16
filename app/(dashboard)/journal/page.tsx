import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import {getUserByClerkId} from "@/utils/auth";
import {prisma} from "@/utils/db"

const getEntries = async () => {
    const user = await getUserByClerkId();
    if (!user) {return []}
    const entries = await prisma.journelEntry.findMany({
        where: {
            userId: user.id
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return entries
}

const Journal = async () => {
    const entries = await getEntries();
    console.log("entries>>" + entries);
    return (
        <div className="px-6 py-8 bg-zinc-100/50 h-full">
            <h2 className="text-3xl mb-8">Journels</h2>

            <div className="grid grid-cols-3 gap-4 ">
                <NewEntryCard />
                {
                    entries.map(entry => <EntryCard entry={entry} key={entry.id} />)
                }
            </div>
        </div>
    )
}

export default Journal