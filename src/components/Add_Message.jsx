
import React from 'react'
import { GrFormAdd } from 'react-icons/gr';
import { RiAlarmWarningFill } from "react-icons/ri";
function Add_Message() {
  return (
    <div className="flex md:flex-row flex-col py-5 gap-2 px-10 ">
    {/* add new card */}
    <div className="flex flex-col gap-1 px-4 py-5 bg-linear-to-r from-cyan-500 to-blue-500 shadow rounded-lg">
      <div className="bg-blue-100 rounded-lg p-0.5 w-fit">
        <GrFormAdd color='blue' size={28} />
      </div>
      <h2 className="text-lg font-semibold text-slate-200">Add new application</h2>
    </div>
    {/* message */}
    <div className="w-full h-full p-4  relative">
      <div className="bg-red-400 rounded-lg absolute z-10 top-2 left-1 animate-bounce">
        <RiAlarmWarningFill size={30} color='white' />
      </div>
      <div className="w-full h-full shadow rounded-lg bg-yellow-200 text-center text-slate-800 p-1.5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minima maiores tempore, quas alias excepturi odit eum exercitationem commodi deleniti.
      </div>
    </div>
  </div>
  )
}

export default Add_Message