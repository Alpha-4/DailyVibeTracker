"use client"
import {deletedEntry} from "@/utils/api";
import {TrashIcon} from "@radix-ui/react-icons"
import {useRouter} from "next/navigation";



const EntryCard = ({entry}: {entry: any}) => {
    const date = new Date(entry.createdAt).toDateString()
    const router = useRouter()

    const deleteEntry = async (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        if (!id) return;
        if (confirm("Are you sure you want to delete this entry?")) {
            await deletedEntry(id);
            router.refresh()
        }
    }

    return (
        <div className="size-72 bg-yellow-200/50 overflow-hidden rounded-lg shadow mx-auto">
            <div className="px-2 py-5 sm:p-4 h-1/6 flex justify-between">
                <span className="text-orange-400">{date}</span>
                <span><TrashIcon color="blue" onClick={(e) => deleteEntry(e, entry?.id)} /></span>
            </div>
            <div className="px-2 py-5 sm:p-4 h-4/6"><p className="overflow-hidden line-clamp-5 text-ellipsis">{entry?.analysis?.summary || "summary"}</p></div>
            <div style={{
                color: entry?.analysis?.color
            }} className="px-2 py-2 sm:px-4 font-semibold italic h-1/6">{entry?.analysis?.mood || "Mood"}</div>
        </div>
    )
}

export default EntryCard