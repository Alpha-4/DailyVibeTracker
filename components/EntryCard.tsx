

const EntryCard = ({entry}: {entry: any}) => {
    const date = new Date(entry.createdAt).toDateString()
    return (
        <div className="w-68 h-76 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="bg-stone-300/40 px-4 py-5 sm:px-6">{date}</div>
            <div className="bg-stone-300/40 px-4 py-5 sm:p-6 overflow-hidden">{entry?.analysis?.summary || "Summary"}</div>
            <div style={{
                backgroundColor: entry?.analysis?.color
            }} className="px-4 py-4 sm:px-6 font-mono font-semibold italic">{entry?.analysis?.mood || "Mood"}</div>
        </div>
    )
}

export default EntryCard