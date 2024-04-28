'use client'
import {updateEntry} from '@/utils/api';
import {useState} from 'react';
import {useAutosave} from 'react-autosave';
import AnalysisCard from './AnalysisCard';
import {Progress} from '@radix-ui/themes';

const Editor = ({entry}: {entry: any}) => {
    const [value, setValue] = useState(entry.content);
    const [isSaving, setIsSaving] = useState(false);
    const [analysis, setAnalysis] = useState(entry.analysis);

    useAutosave({
        data: value,
        onSave: async (newVal) => {
            if (newVal === entry.content) return
            setIsSaving(true)
            const newEntry = await updateEntry(entry.id, newVal)
            setAnalysis(newEntry?.analysis)
            setIsSaving(false)
        },
    })

    return (
        <div className='w-full h-screen outline-none grid grid-cols-2 md:grid-cols-3 p-4 md:p-8'>
            <div className='w-full full col-span-1 md:col-span-2 py-1 px-2'>
                {isSaving && <p><Progress /> Saving...</p>}
                <textarea
                    className='w-full h-full px-2 md:px-8 text-sm md:text-xl'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    autoFocus={true} />
            </div>
            <AnalysisCard analysis={analysis} />
        </div>
    )
}

export default Editor