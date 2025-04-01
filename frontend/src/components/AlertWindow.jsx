import React from 'react'
import { motion } from 'framer-motion';

const AlertWindow = ({ message, isAlertVisible, handleNoBtn, handleYesBtn }) => {
    return (
        <div
            className={`absolute w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${isAlertVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>

            <div className={`w-full max-w-md max-h-fit overflow-y-scroll bg-gray-800 bg-opacity-50 backdrop-filter rounded-2xl shadow-xl p-2 sm:p-4`}>
                <p className='text-sm text-center'>{message}</p>

                <div className="mt-4 flex items-center justify-between gap-6">
                    <button type="submit" className='w-full text-white font-[poppins] border border-cyan-500 mt-5 px-3 py-2 rounded-lg font-bold hover:from-blue-600 hover:to-blue-700 transition duration-200 outline-none' onClick={handleNoBtn}>No</button>

                    <button type="submit" className='w-full text-white font-[poppins] bg-gradient-to-br from-cyan-500 to-blue-600 mt-5 px-3 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition duration-200 outline-none' onClick={handleYesBtn}>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default AlertWindow