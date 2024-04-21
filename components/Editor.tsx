'use client'
import {updateEntry} from '@/utils/api';
import {useState} from 'react';
import {useAutosave} from 'react-autosave';
import AnalysisCard from './AnalysisCard';

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
        <>
            <div className='w-full h-full col-span-2'>
                {isSaving && <p>Saving...</p>}
                <textarea
                    className='w-full h-full px-8 text-xl'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    autoFocus={true} />
            </div>
            <AnalysisCard analysis={analysis} />
        </>
    )
}

export default Editor