import { Crown } from 'lucide-react';
import { useEffect } from 'react'
import { useContentStore } from '../store/contentStore';
import { userSubscriptionStore } from '../store/UserSubscriptionStore';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const WordLimitBar = () => {
    const navigate = useNavigate()
    const {user} = useAuthStore()
    const { totalUsage, fetchHistoryApi } = useContentStore()
    const {  checkIfUserSubscribed, maxUsage } = userSubscriptionStore()
    useEffect(() => {
        fetchHistoryApi()
        checkIfUserSubscribed(user.email)
    }, [])

    return (
        <div className='mt-6 bg-gray-800 bg-opacity-50 backdrop-filter rounded-2xl shadow-xl p-2 sm:p-4'>
            <h2 className='font-bold'>Total Word Limit</h2>
            <div className="w-full h-4 bg-white rounded-full mt-3">
                <div className="h-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full" style={{ width:`${(totalUsage / maxUsage) * 100}%` }} ></div>
            </div>
            <div className='flex justify-between items-center gap-2 mt-3'>
                <div>{totalUsage}/{maxUsage}</div>
                <div>
                    Used Credits
                </div>
            </div>

            <button className='mt-3 flex items-center justify-center gap-2 text-white font-[poppins] text-xs bg-gradient-to-br from-cyan-500 to-blue-600 px-3 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition duration-200 outline-none' ><Crown className='size-4' onClick={() => {
                navigate("/dashboard/billing")
            }} /> Upgrade</button>

        </div>
    )
}

export default WordLimitBar