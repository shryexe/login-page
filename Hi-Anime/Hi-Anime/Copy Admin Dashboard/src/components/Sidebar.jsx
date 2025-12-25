import React from 'react'
import { Zap } from "lucide-react";

function Sidebar() {
  return (
    <div className='transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80
    backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col
    relative z-10'>
      {/*logo*/}
      <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
        <div className="flex items-center space-x-3">
          <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl
          flex items-center justify-center shadow-lg'>
            <Zap className = "w-6 h-6 text-white"/>

          </div>
          {/*conditional rendering*/}
        <div >
          <h1 className='text-xl font-bold text-slate-800 dark:text-white'>
            Nexus
          </h1>
          <p className='text-xs text-slate-500 dark:text-slate-400'>
            Admin Panel</p>
            
          </div>
        </div>
        </div>
        {/*navigation i will display dynamic menu*/}
        <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
        </nav>  
      </div>
    
  )
}

export default Sidebar
