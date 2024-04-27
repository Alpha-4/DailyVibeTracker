"use client"
import {Analysis} from '@prisma/client';

const AnalysisCard = ({analysis}: {analysis: Analysis}) => {
    const {mood, subject, summary, negative, color} = analysis;
    const analysisData = [
        {
            name: 'Mood',
            value: mood || "mood"
        },
        {
            name: 'Emotions',
            value: negative === false ? "positive" : "negative"
        },
        {
            name: 'Subject',
            value: subject.trim() || "subject"
        },
        {
            name: 'Summary',
            value: summary.trim() || "summary"
        },

    ]

    const getClassName = (name: string, value: string) => {

        if (name === 'Emotions' && value === 'positive') {
            return 'text-green-500 text-sm md:text-lg'
        }
        else if (name === 'Emotions' && value === 'negative') {
            return 'text-red-500 text-sm md:text-lg'
        }
        return 'text-sm md:text-lg overflow-hidden'
    }

    return (
        <div className='border-l border-black/10 h-full rounded-lg bg-stone-200/40'>
            <div className='px-2 py-3 md:px-6 md:py-10 rounded-t-lg' style={{
                backgroundColor: color ? color : '#0101fe',
            }}>
                <h2 className='text-lg md:text-3xl font-semibold'>Analysis</h2>
            </div>
            <div>
                <ul className='flex flex-col'>
                    {analysisData.map((data) => (
                        <li key={data.name} className='items-center border-y-2 border-black/5 px-2'>
                            <span className='text-base md:text-lg font-semibold'>{data.name}:</span>
                            <p className={getClassName(data.name, data.value)}>{data.value}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AnalysisCard