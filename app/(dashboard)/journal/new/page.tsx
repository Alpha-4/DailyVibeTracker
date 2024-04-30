import NewEntryEditor from '@/components/NewEntryEditor'


const page = async () => {
    return (
        <NewEntryEditor />
    )
}

export const metadata = {
    title: 'Create New Entry',
    description: 'Create a new journal entry',
}

export default page