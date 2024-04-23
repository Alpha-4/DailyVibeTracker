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
        <div className="px-2 py-2 md:px-6 md:py-8 bg-zinc-100/50 h-full w-full">
            <h2 className="flex justify-between mb-4 md:mb-8 text-lg md:text-2xl lg:text-3xl text-center">
                <span className="px-2 py-2 md:px-4 md:py-5 font-mono font-semibold italic text-stone-700">Your Memoirs...</span>
                <NewEntryCard />
            </h2>
            <div className="my-2 md:my-8">
                <Question />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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