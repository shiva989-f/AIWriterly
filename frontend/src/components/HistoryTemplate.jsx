import { Copy } from 'lucide-react'
import React from 'react'
import { formatDate } from '../Utils/FormatDate'
import { totalWords } from '../Utils/TotalWords'

const HistoryTemplate = ({ icon, name, output, date }) => {

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
    }


    return (
        <div className='bg-gray-800 bg-opacity-50 backdrop-filter rounded-2xl shadow-xl p-2 sm:p-4 m-2 sm:m-6'>
            <div className="flex justify-between gap-5">
                <div className="text-start flex items-center gap-5 ">
                    <img src={icon} alt={name} className='w-10' />
                    <h2 className='mt-2 sm:mt-0 font-bold bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent '>{name}</h2>
                </div>

                <button type="submit" className='flex items-center justify-center gap-2 h-fit text-white font-[poppins] text-xs bg-gradient-to-br from-cyan-500 to-blue-600 px-3 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition duration-200 outline-none' onClick={()=> handleCopy(output)} ><Copy className='size-4' /> Copy</button>
            </div>

            <div className="mt-4">
                <h2 className='font-bold text-white text-nowrap mb-2'>AI Output</h2>
                <p className='line-clamp-3 text-xs text-gray-400 w-11/12'>{output}</p>
            </div>

            <div className="flex justify-between gap-5 mt-4">
                <div>
                    <h2 className='font-bold text-white'>Generated On</h2>
                    <p className='w-fit text-xs text-gray-400 '>{formatDate(date) || "12/2/25"}</p>
                </div>
                <div>
                    <h2 className='font-bold text-white'>Total Words</h2>
                    <p className='text-xs text-gray-400 '>{totalWords(output)}</p>
                </div>
            </div>

        </div>
    )
}

export default HistoryTemplate