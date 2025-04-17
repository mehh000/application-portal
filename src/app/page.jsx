'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar';
import HomeComponet from '@/components/Home';
import AddApplication from '@/components/AddApplication';

function Home() {

  const [dynamicCompo, setDynamicCompo] = useState('home');
  console.log('compo is :', dynamicCompo)

  const renderComponent = () => {
    switch (dynamicCompo) {
      case 'home': return <HomeComponet />;
      case 'add': return <AddApplication />;
      case 3: return <h1>home</h1>;
      case 4: return <h1>home</h1>;
      default: return <h1>home</h1>;
    }
  };
  return (
    <div className="w-full h-screen bg-gray-200 flex md:items-center items-start justify-center">

      <div className=" md:w-[70%] w-full md:h-[80%] h-full  bg-gray-50 shadow-lg rounded-xl flex flex-row">
        {/* side bar */}
        <Sidebar setDynamicCompo={setDynamicCompo} />

        {/* content */}
        {renderComponent()}
      </div>
    </div>
  )
}

export default Home