import {JournelEntry} from '@prisma/client'

const EntryCard = ({entry}: {entry: JournelEntry}) => {
    return (
        <div>{entry.id}</div>
    )
}

export default EntryCard