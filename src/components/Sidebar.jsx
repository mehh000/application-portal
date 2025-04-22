'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FiHome, FiPlusCircle, FiClock, FiSettings, FiLogOut } from 'react-icons/fi';
import { TbLibrary } from "react-icons/tb";

function Sidebar() {
  const [dynamic, setDynamicCompo] = useState('home');

  const menuList = [
    { id: 1, name: 'Home', component: '/userboard', icon: <FiHome size={20} /> },
    { id: 2, name: 'New Application', component: '/userboard/new-application', icon: <FiPlusCircle size={20} /> },
    { id: 3, name: 'History', component: '/userboard/history', icon: <FiClock size={20} /> },
    { id: 4, name: 'Templates', component: '/userboard/templates', icon: <TbLibrary size={20} /> },
    { id: 4, name: 'Setting', component: '/userboard/setting', icon: <FiSettings size={20} /> },
  ];

  return (
    <div className="bg-white  hidden md:flex flex-col w-[18%] h-screen p-4">
      {/* Title */}
      <h2 className="text-xl font-bold text-blue-600 text-center mb-10">Application Portal</h2>

      {/* Menu */}
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-2">
          {menuList.map((item) => (
            <Link
            href={item.component}
              key={item.id}
              onClick={() => setDynamicCompo(item.component)}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-md 
              ${dynamic === item.component
                  ? 'bg-blue-100 text-blue-600 font-semibold'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                } transition-all duration-200`}
            >
              {item.icon}
              <span className="text-[15px]">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="flex items-center justify-center text-red-500 font-semibold py-3 hover:text-red-700 cursor-pointer transition-all duration-200">
          <FiLogOut className="mr-2" size={18} />
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
