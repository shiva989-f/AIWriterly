import React from 'react'
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import axios from 'axios';
import { errorMessage } from '../Utils/HandleToast';
import { useContentStore } from '../store/contentStore';
import Button from '../components/Button';
import { useAuthStore } from '../store/authStore';
import { userSubscriptionStore } from '../store/UserSubscriptionStore';

const Billing = () => {

  const { handleCreateSubscription, isLoading } = useContentStore()
  const {user} = useAuthStore()
  const {isUserSubscribed} = userSubscriptionStore()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className='w-full h-screen p-4 overflow-x-hidden text-white'
    >
      <div className="p-4 h-full">
        <h1 className='font-[poppinsBold] text-center font-black text-3xl bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent'>Upgrade To Premium</h1>

        <div className="w-full lg:h-full flex justify-center items-center gap-12 flex-wrap py-8">

          <div className="w-full max-w-md bg-gray-800 bg-opacity-50 backdrop-filter rounded-2xl shadow-xl cursor-pointer p-6 hover:-translate-y-2 transition-all">
            <h3 className="font-semibold text-center">Free</h3>
            <h1 className="text-center mt-4"><span className='font-bold text-2xl'>₹0/</span> Month</h1>

            <div className="mt-6 flex justify-start items-center gap-2 text-sm">
              <Check/>
              <p>10,000 words/Month</p>
            </div>

            <div className="mt-2 flex justify-start items-center gap-2 text-sm">
              <Check />
              <p>50+ Content Templates</p>
            </div>

            <div className="mt-2 flex justify-start items-center gap-2 text-sm">
              <Check />
              <p>Unlimited Downloads & Copy</p>
            </div>

            <div className="mt-2 flex justify-start items-center gap-2 text-sm">
              <Check />
              <p>1 Month of History</p>
            </div>

            <button type="submit" className='w-full text-white font-[poppins] bg-gradient-to-br from-cyan-500 to-blue-600 mt-5 px-3 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition duration-200 outline-none  disabled:from-cyan-700 disabled:to-blue-800' disabled>{isUserSubscribed ? "You are Premium User" : "Activated Plan"}</button>

          </div>

          <div className="w-full max-w-md bg-gray-800 bg-opacity-50 backdrop-filter rounded-2xl shadow-xl cursor-pointer p-6 hover:-translate-y-2 transition-all">
            <h3 className="font-semibold text-center">Premium</h3>
            <h1 className="text-center mt-4"><span className='font-bold text-2xl'>₹399/</span> Month</h1>

            <div className="mt-6 flex justify-start items-center gap-2 text-sm">
              <Check />
              <p>1,00,000 words/Month</p>
            </div>

            <div className="mt-2 flex justify-start items-center gap-2 text-sm">
              <Check />
              <p>50+ Content Templates</p>
            </div>

            <div className="mt-2 flex justify-start items-center gap-2 text-sm">
              <Check />
              <p>Unlimited Downloads & Copy</p>
            </div>

            <div className="mt-2 flex justify-start items-center gap-2 text-sm">
              <Check />
              <p>1 Year of History</p>
            </div>

            <Button buttonText={isUserSubscribed? "Activated Plan" : "Upgrade"} handleBtnFunc={() => handleCreateSubscription(user.name, user.email)} isLoading={isLoading} />

          </div>


        </div>
      </div>
    </motion.div>
  )
}

export default Billing