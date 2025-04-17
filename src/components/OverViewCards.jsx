import React from 'react'
import { FaWpforms } from "react-icons/fa6";
import { FcAcceptDatabase } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdDoNotDisturb } from "react-icons/md";
import { GrFormAdd } from "react-icons/gr";

function OverViewCards() {
  return (
  // py-5 px-10
        <div className="w-full flex flex-row gap-5  flex-wrap items-center justify-center">
    {/* card */}
    <div className="p-3 rounded-lg bg-white shadow flex flex-col gap-3">
      <h2 className='text-xl text-slate-600 font-semibold' >Total apllication</h2>
      <div className="flex flex-row gap-2">
        <FaWpforms color='gray' size={25} />
        <p className="text-lg text-gray-800">12</p>
      </div>
    </div>

    <div className="p-3 rounded-lg bg-white shadow flex flex-col gap-3">
      <h2 className='text-xl text-slate-600 font-semibold' >Total Pending</h2>
      <div className="flex flex-row gap-2">
        <MdOutlinePendingActions color='blue' size={25} />
        <p className="text-lg text-gray-800">12</p>
      </div>
    </div>

    <div className="p-3 rounded-lg bg-white shadow flex flex-col gap-3">
      <h2 className='text-xl text-slate-600 font-semibold' >Total Rejected</h2>
      <div className="flex flex-row gap-2">
        <MdDoNotDisturb color='red' size={25} />
        <p className="text-lg text-gray-800">12</p>
      </div>
    </div>
    <div className="p-3 rounded-lg bg-white shadow flex flex-col gap-3">
      <h2 className='text-xl text-slate-600 font-semibold' >Total Sucessful</h2>
      <div className="flex flex-row gap-2">
        <FcAcceptDatabase size={25} />
        <p className="text-lg text-gray-800">12</p>
      </div>
    </div>
  </div>
 
  )
}

export default OverViewCards