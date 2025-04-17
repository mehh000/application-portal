
import Image from 'next/image';
import React from 'react'
import { IoNotifications } from "react-icons/io5";
import Sidebar from '@/components/Sidebar';
import OverViewCards from '@/components/OverViewCards';
import Add_Message from '@/components/Add_Message';
import Header from '@/components/Header';
import Welcome from '@/components/Welcome';

function Home() {

  return (
    <div className="w-full h-screen bg-gray-200 flex md:items-center items-start justify-center">

      <div className=" md:w-[70%] w-full md:h-fit h-full  bg-gray-50 shadow-lg rounded-xl flex flex-row">
        {/* side bar */}
        <Sidebar />

        {/* content */}
        <div className=" md:w-[75%] w-full h-full  flex flex-col">
          {/* header */}
          <Header />
          {/* profile header */}
          <Welcome />

          {/* over view card */}
          <OverViewCards />
          {/* new and message */}
          <Add_Message />
        </div>

      </div>
    </div>
  )
}

export default Home