
import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import Pagination from "@/components/Pagination";
import Question from "@/components/Question";
import {getUserByClerkId} from "@/utils/auth";
import {prisma} from "@/utils/db"
import Link from "next/link";


const getEntries = async (page: number, pageSize: number) => {
    const user = (await getUserByClerkId())!;
    if (!user) {return []}
    let skip = 0;
    if (page > 1) skip = (page - 1) * pageSize
    const entries = await prisma.journelEntry.findMany({
        where: {
            userId: user.id
        },
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            analysis: true
        },
        skip: skip,
        take: pageSize
    })
    return entries
}

const totalEntries = async () => {
    const user = (await getUserByClerkId())!;
    if (!user) {return 0}
    const entries = await prisma.journelEntry.count({
        where: {
            userId: user.id
        },
    })
    return entries
}

const Journal = async ({
    searchParams,
}: {
    searchParams?: {page: string}
}) => {
    const totalItems = await totalEntries();
    const pageSize = 5;
    const currPage = searchParams?.page ? parseInt(searchParams.page) : 1
    const entries = await getEntries(currPage, pageSize);
    return (
        <div className="px-2 py-2 md:px-6 md:py-8 bg-zinc-100/50 h-full w-full">
            <h2 className="flex justify-between mb-4 md:mb-8 text-lg md:text-2xl lg:text-3xl text-center">
                <span className="px-2 py-2 md:px-4 md:py-5 font-semibold italic text-stone-700">Your Memoirs...</span>
                <NewEntryCard />
            </h2>
            <div className="px-2 my-2 md:my-8">
                <Question />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    entries.map(entry =>
                    (
                        <Link href={`/journal/${entry.id}`} key={entry.id}>
                            <EntryCard entry={entry} />
                        </Link>
                    )

                    )}
            </div>
            {totalItems > 5 && <Pagination itemCount={totalItems} pageSize={pageSize} currentPage={currPage} />}
        </div>
    )
}

export const metadata = {
    title: 'Your Memoirs',
    description: 'A list of all your journal entries',
}


export const dynamic = 'force-dynamic'
export default Journal