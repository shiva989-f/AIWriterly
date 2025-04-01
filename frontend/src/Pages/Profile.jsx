import { motion } from 'framer-motion';
import ProfileNav from '../components/ProfileNav';
import WordLimitBar from '../components/WordLimitBar';

const Profile = () => {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className='relative w-full h-screen p-4 overflow-x-hidden text-white'
        >

            <div className="w-full h-full overflow-y-scroll bg-gray-800 bg-opacity-50 backdrop-filter rounded-2xl shadow-xl p-2 sm:p-4">

                <ProfileNav />

                {/* Word Limit Progress bar */}
                <WordLimitBar/>

            </div>
        </motion.div>
    )
}

export default Profile