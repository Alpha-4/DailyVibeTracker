'use client'
import {updateEntry} from '@/utils/api';
import {JournelEntry} from '@prisma/client'
import {useState} from 'react';
import {useAutosave} from 'react-autosave';

const Editor = ({entry}: {entry: JournelEntry}) => {
    const [value, setValue] = useState(entry.content);
    const [isSaving, setIsSaving] = useState(false);

    useAutosave({
        data: value,
        onSave: async (newVal) => {
            if (newVal === entry.content) return
            setIsSaving(true)
            const newEntry: JournelEntry = await updateEntry(entry.id, newVal)
            setIsSaving(false)
        },
    })

    return (
        <div className='w-full h-full'>
            {isSaving && <p>Saving...</p>}
            <textarea
                className='w-full h-full px-8 text-xl'
                onChange={(e) => setValue(e.target.value)}
                value={value} />
        </div>
    )
}

export default Editor