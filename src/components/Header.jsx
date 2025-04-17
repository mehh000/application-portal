
import React from 'react'
import { IoNotifications } from 'react-icons/io5'
import { BsMenuButton } from "react-icons/bs";


function Header() {
  return (
            <div className=" p-5 flex flex-row justify-between">
              <h2 className="text-gray-900 text-2xl md:block hidden font-bold ">Home</h2>
              <BsMenuButton size={24} color='gray' className='md:hidden block' />
              <div className="flex flex-row gap-5">
                <p className="text-gray-400 font-light">april 24, 2025</p>
                <p className="text-gray-400 font-light">10:20PM</p>
              </div>
              <IoNotifications color='gray' size={25} />
            </div>
  )
}

export default Header