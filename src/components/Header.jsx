'use client'

import React, { useState } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { BsMenuButtonWideFill } from "react-icons/bs";
import Image from 'next/image';
import ResponsiveDrawer from './ResponsiveDrawer';

function Header() {
    const [showDrawer, setShowDrawer] = useState(false)

  const handleOpenResponsiveDrawer = () => {
    // console.log("d value",setShowDrawer)
    setShowDrawer(!showDrawer)
  }
  return (
    <>
    <ResponsiveDrawer showDrawer={showDrawer}  setShowDrawer={setShowDrawer} />
    <header className="w-full p-5 flex items-center justify-between bg-white  ">
      {/* Left: Title or Menu */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Icon */}
        <button
          onClick={()=> handleOpenResponsiveDrawer()}
          className="md:hidden block text-gray-600"
        >
          <BsMenuButtonWideFill size={24} />
        </button>

        {/* Title for Desktop */}
        <h2 className="text-2xl font-semibold text-gray-800 hidden md:block">Home</h2>
      </div>

      {/* Center: Time & Date */}
      <div className="flex flex-row gap-2 items-end text-sm text-gray-500">
        <span>April 24, 2025</span>
        <span>10:20 PM</span>
      </div>

      {/* Right: Notification */}
      <div className="flex flex-row gap-5 items-center">
        <IoNotificationsOutline size={28} className="text-gray-600 cursor-pointer hover:text-gray-800 transition duration-150" />
        <div className=" w-[50px] h-[50px]  rounded-full overflow-hidden ring-2 ring-blue-500">
          <Image
            src="/men.jpg"
            width={50}
            height={50}
            className="object-cover"
            alt="profile"
          />
        </div>
      </div>
    </header> </>
  );
}

export default Header;
