import { Search } from 'lucide-react'
import Input from './Input'
import { useAuthStore } from '../store/authStore'
import { useNavigate } from 'react-router-dom'

const DashboardHeader = ({ handleChange }) => {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const name = user.name.split(" ")
  
  return (
    <div className='sm:flex items-center justify-between gap-4'>
      <div className='order-1 flex justify-between items-center gap-4 mb-6 px-2'>
        <img src="/logo.webp" alt="logo" className='w-10 rounded-full' />
        <h1 className='text-center underline underline-offset-4 hover:text-cyan-500 cursor-pointer' onClick={()=> navigate('/dashboard/profile') }>{name[0]}</h1>
      </div>

      <div className="max-w-md order-2">
        <Input
          icon={Search}
          type="text"
          placeholder="Search"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

    </div>
  )
}

export default DashboardHeader