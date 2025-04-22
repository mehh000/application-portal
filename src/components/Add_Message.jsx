import React from 'react'
import { GrFormAdd } from 'react-icons/gr'
import { RiAlarmWarningFill } from 'react-icons/ri'

function Add_Message() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-5">
      {/* Add New Card */}
      <div className="flex flex-col gap-2 p-5 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg rounded-xl w-full md:w-[300px]">
        <div className="bg-white p-1.5 rounded-lg w-fit shadow">
          <GrFormAdd className="text-blue-500" size={28} />
        </div>
        <h2 className="text-xl font-semibold text-white">Add New Application</h2>
      </div>

      {/* Message Card */}
      <div className="relative flex-1">
        <div className="absolute top-2 left-3 z-10 animate-bounce bg-red-500 p-1.5 rounded-full shadow">
          <RiAlarmWarningFill className="text-white" size={24} />
        </div>
        <div className="bg-yellow-100 shadow-md rounded-xl p-5 pl-12 text-gray-800 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minima maiores tempore, quas alias excepturi odit eum exercitationem commodi deleniti.
        </div>
      </div>
    </div>
  )
}

export default Add_Message
