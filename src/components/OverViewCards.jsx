import React from 'react'
import { FaWpforms } from "react-icons/fa6"
import { FcAcceptDatabase } from "react-icons/fc"
import { MdOutlinePendingActions, MdDoNotDisturb } from "react-icons/md"

const cards = [
  {
    id: 1,
    title: 'Total Applications',
    count: 12,
    icon: <FaWpforms className="text-white" size={22} />,
    bg: 'bg-slate-500',
  },
  {
    id: 2,
    title: 'Total Pending',
    count: 8,
    icon: <MdOutlinePendingActions className="text-white" size={24} />,
    bg: 'bg-blue-500',
  },
  {
    id: 3,
    title: 'Total Rejected',
    count: 4,
    icon: <MdDoNotDisturb className="text-white" size={24} />,
    bg: 'bg-red-500',
  },
  {
    id: 4,
    title: 'Total Successful',
    count: 10,
    icon: <FcAcceptDatabase size={26} />, // This icon is colored already
    bg: 'bg-green-100',
  },
]

function OverViewCards() {
  return (
    <div className="w-full flex flex-wrap gap-6 justify-center py-5 px-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-full max-w-xs sm:max-w-[250px] p-4 sm:p-5 bg-white shadow-md rounded-2xl flex flex-col gap-4 hover:shadow-lg transition"
        >
          <h2 className="text-base sm:text-lg font-semibold text-gray-700">{card.title}</h2>
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-full ${card.bg}`}>
              {card.icon}
            </div>
            <p className="text-lg sm:text-xl font-bold text-gray-800">{card.count}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OverViewCards
