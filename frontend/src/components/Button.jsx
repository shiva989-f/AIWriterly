import { Loader } from 'lucide-react'
import React from 'react'

const Button = ({isLoading, handleBtnFunc, buttonText}) => {
    return (
        <button type="submit" className='w-full text-white font-[poppins] bg-gradient-to-br from-cyan-500 to-blue-600 mt-5 px-3 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition duration-200 outline-none disabled:from-cyan-700 disabled:to-blue-800' disabled={isLoading} onClick={handleBtnFunc}>
            {isLoading ? <Loader className='animate-spin mx-auto' /> : buttonText}
        </button>
    )
}

export default Button