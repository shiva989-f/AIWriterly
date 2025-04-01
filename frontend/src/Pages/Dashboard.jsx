import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import DashboardHeader from '../components/DashboardHeader'
import TemplateList from '../components/TemplateList'
import { useState } from 'react'

const Dashboard = () => {
    const [searchInput, setSearchInput] = useState("")
    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className='w-full h-screen p-4 overflow-x-hidden text-white'
        > 
        <div className="w-full h-full overflow-y-scroll bg-gray-800 bg-opacity-50 backdrop-filter rounded-2xl shadow-xl p-2 sm:p-4">
                <DashboardHeader handleChange={(value) => { setSearchInput(value)}}/>
                <TemplateList searchInput={searchInput}/>
            </div>

        </motion.div>
    )
}

export default Dashboard