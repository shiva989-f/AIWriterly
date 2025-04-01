import { FileClock, Home, LogOut, Wallet } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useState } from 'react'
import AlertWindow from './AlertWindow'

const ProfileNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout } = useAuthStore()
  const name = user.name.split(" ")
  const [isAlertVisible, setIsAlertVisible] = useState(false)

  const handleLogout = async () => {
    await logout()
    setIsAlertVisible(false)
    navigate("/login", { replace: true });
  }

  const MenuItem = [
    {
      name: "Home",
      icon: Home,
      path: '/dashboard'
    },
    {
      name: "History",
      icon: FileClock,
      path: '/dashboard/history'
    },
    {
      name: "Billing",
      icon: Wallet,
      path: '/dashboard/billing'
    }
  ]
  return (
    <div className='bg-gray-800 bg-opacity-50 backdrop-filter rounded-2xl shadow-xl overflow-hidden p-4 '>

      <div className="w-full mb-4 p-2 flex items-center justify-between gap-6 border-b border-gray-400 ">
        <img src="/logo.webp" alt="logo" className='w-8 rounded-md' onClick={() => navigate('/dashboard')} />
        <h1 className='text-center underline underline-offset-4 hover:text-cyan-500 cursor-pointer' onClick={() => navigate('/dashboard/profile')}>{name[0]}</h1>
      </div>

      <div>
        {
          MenuItem.map((menu) => (
            <div key={menu.name} className={`flex items-center gap-6 p-2 my-4 hover:bg-foregroundColor rounded-xl hover:shadow-xl cursor-pointer ${location.pathname == menu.path && "bg-foregroundColor shadow-xl"}`} onClick={() => {
              navigate(menu.path)
            }}>
              <menu.icon />
              <h3>{menu.name}</h3>
            </div>
          ))
        }

        <div className="flex item-center gap-6 p-2 my-4 hover:bg-foregroundColor rounded-xl hover:shadow-xl cursor-pointer" onClick={() => setIsAlertVisible(true)}>
          <LogOut />
          <h3>Logout</h3>
        </div>
      </div>
      <AlertWindow message={"Are you sure want to logout?"} isAlertVisible={isAlertVisible} handleYesBtn={handleLogout} handleNoBtn={() => setIsAlertVisible(false)} />
    </div>
  )
}

export default ProfileNav