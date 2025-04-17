
import React from 'react'
import Header from './Header'
import Welcome from './Welcome'
import OverViewCards from './OverViewCards'
import Add_Message from './Add_Message'

function HomeComponet() {
  return (
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
  )
}

export default HomeComponet