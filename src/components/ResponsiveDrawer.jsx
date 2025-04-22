'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsMenuButton } from 'react-icons/bs';
import { FiHome, FiPlusCircle, FiClock, FiSettings, FiLogOut } from 'react-icons/fi';
import { TbLibrary } from "react-icons/tb";
function ResponsiveDrawer({ setDynamicCompo, showDrawer, setShowDrawer }) {
  const menuList = [
    { id: 1, name: 'Home', component: '/userboard', icon: <FiHome size={20} /> },
    { id: 2, name: 'New Application', component: '/userboard/new-application', icon: <FiPlusCircle size={20} /> },
    { id: 3, name: 'History', component: '/userboard/history', icon: <FiClock size={20} /> },
    { id: 4, name: 'Templates', component: '/userboard/templates', icon: <TbLibrary size={20} /> },
    { id: 4, name: 'Setting', component: '/userboard/setting', icon: <FiSettings size={20} /> },
  ];

  const [dynamicRes, setDynamicCompoRes] = useState('home');

  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-[70%] max-w-xs bg-gray-100 z-[500] p-5 
        transition-transform duration-300 ease-in-out 
        ${showDrawer ? 'translate-x-0' : '-translate-x-full'}`}>
      <BsMenuButton onClick={() => { setShowDrawer(false) }} size={24} color='gray' className='md:hidden block' />
      <h2 className="text-2xl text-gray-900 font-semibold mb-8">Application Portal</h2>

      <div className="flex flex-col h-full justify-between">
        <div className="space-y-2">
          {menuList.map((item) => (
            <Link
              href={item.component}
              key={item.id}
              onClick={() => setDynamicCompoRes(item.component)}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-md 
              ${dynamicRes === item.component
                  ? 'bg-blue-100 text-blue-600 font-semibold'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                } transition-all duration-200`}
            >
              {item.icon}
              <span className="text-[15px]">{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="text-red-500 font-bold hover:text-red-700 text-center mt-10 cursor-pointer">
          Logout
        </div>
      </div>
    </div>
  );
}

export default ResponsiveDrawer;
