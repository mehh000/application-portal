'use cleint'
import Add_Message from '@/components/Add_Message'
import OverViewCards from '@/components/OverViewCards'
import React from 'react'

function UserBoardHome() {
  return (
    <div className="flex w-full flex-col">
     <OverViewCards />
     <Add_Message />
    </div>
  )
}

export default UserBoardHome