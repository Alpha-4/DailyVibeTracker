'use client'


import {askQuestion} from '@/utils/api'
import {FormEvent, useState} from 'react'

const Question = () => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const {data} = await askQuestion(question)

        setAnswer(data)
        setLoading(false)
        setQuestion('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 text-lg mx-2 my-2"
                    disabled={loading}
                    placeholder="Ask a question..."
                />
                <button
                    disabled={loading}
                    type="submit"
                    className="bg-blue-400 px-4 py-2 rounded-md mx-2 my-2 font-semibold italic"
                >
                    Ask
                </button>
                {answer &&
                    <button
                        disabled={loading}
                        onClick={() => setAnswer(null)}
                        className="bg-yellow-300 px-4 py-2 rounded-md mx-2 my-2 font-semibold italic"
                    >
                        Clear Answer
                    </button>
                }
            </form>
            {loading && <p className='my-2 mx-2 text-green-400'>Loading...</p>}
            {answer && <p className="my-4 text-xl mx-2 text-yellow-800">{answer}</p>}
        </div>
    )
}

export default Question