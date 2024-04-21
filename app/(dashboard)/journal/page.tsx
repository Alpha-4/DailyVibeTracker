import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import Question from "@/components/Question";
import {getUserByClerkId} from "@/utils/auth";
import {prisma} from "@/utils/db"
import Link from "next/link";

const getEntries = async () => {
    const user = await getUserByClerkId();
    if (!user) {return []}
    const entries = await prisma.journelEntry.findMany({
        where: {
            userId: user.id
        },
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            analysis: true
        }
    })
    return entries
}

const Journal = async () => {
    const entries = await getEntries();
    return (
        <div className="px-6 py-8 bg-zinc-100/50 h-full">
            <h2 className="flex justify-between mb-8 text-3xl text-center">
                <span className="px-4 py-5">Journels</span>
                <NewEntryCard />
            </h2>
            <div className="my-8">
                <Question />
            </div>

            <div className="grid grid-cols-3 gap-4">
                {
                    entries.map(entry =>
                    (
                        <Link href={`/journal/${entry.id}`} key={entry.id}>
                            <EntryCard entry={entry} />
                        </Link>
                    )

                    )}
            </div>
        </div>
    )
}

export default Journal