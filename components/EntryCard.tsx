

const EntryCard = ({entry}: {entry: any}) => {
    const date = new Date(entry.createdAt).toDateString()
    return (
        <div className="size-72 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow mx-auto">
            <div className="bg-stone-300/40 px-2 py-5 sm:p-4 h-1/6">{date}</div>
            <div className="bg-stone-300/40 px-2 py-5 sm:p-4 h-4/6"><p className="overflow-hidden line-clamp-5 text-ellipsis">{entry?.analysis?.summary || "summary"}</p></div>
            <div style={{
                backgroundColor: entry?.analysis?.color
            }} className="px-2 py-2 sm:px-4 font-mono font-semibold italic h-1/6">{entry?.analysis?.mood || "Mood"}</div>
        </div>
    )
}

export default EntryCard