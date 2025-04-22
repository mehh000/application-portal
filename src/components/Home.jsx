// 'use client'
// import React, { useState } from 'react'
// import Header from './Header'
// import Welcome from './Welcome'
// import OverViewCards from './OverViewCards'
// import Add_Message from './Add_Message'
// import ResponsiveDrawer from './ResponsiveDrawer'

// function HomeComponet() {
//   const [showDrawer, setShowDrawer] = useState(false)

//   const handleOpenResponsiveDrawer = () => {
//     console.log("d value",setShowDrawer)
//     // setShowDrawer(!showDrawer)
//   }

//   return (
//     <div className=" md:w-[75%] w-full h-full  flex flex-col">
//     {/* header */}
//     <Header handleOpenResponsiveDrawer={handleOpenResponsiveDrawer} />
//     <ResponsiveDrawer showDrawer={showDrawer}  setShowDrawer={setShowDrawer}/>
//     {/* profile header */}
//     <Welcome /> 

//     {/* over view card */}
//     <OverViewCards />
//     {/* new and message */}
//     <Add_Message />
//   </div>
//   )
// }

// export default HomeComponet