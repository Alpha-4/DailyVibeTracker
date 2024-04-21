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
            return 'text-green-500 text-lg'
        }
        else if (name === 'Emotions' && value === 'negative') {
            return 'text-red-500 text-lg'
        }
        return 'text-lg'
    }

    return (
        <div className='border-l border-black/10 h-full'>
            <div className='px-6 py-10' style={{
                backgroundColor: color ? color : '#0101fe',
            }}>
                <h2 className='text-3xl'>Analysis</h2>
            </div>
            <div>
                <ul className='flex flex-col'>
                    {analysisData.map((data) => (
                        <li key={data.name} className='items-center border-y-2 border-black/5 px-2'>
                            <span className='text-lg font-semibold mx-1'>{data.name}:</span>
                            <p className={getClassName(data.name, data.value)}>{data.value}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AnalysisCard