import React from 'react'

function Sidebar({ setDynamicCompo }) {
    const menuList = [
        { id: 1, name: 'Home', component: 'home' },
        { id: 2, name: 'New Application', component: 'add' },
        { id: 3, name: 'Histroy', component: 'history' },
        { id: 4, name: 'Setting', component: 'setting' },
    ]
    return (
        <div className="bg-gray-100 md:flex lg:flex hidden flex-col items-center w-[25%] ">

            <h2 className="text-2xl text-gray-900 py-10 font-semibold">Application Portal</h2>
            <div className="flex flex-col h-full w-full justify-between">
                <div className="w-full px-2">
                    {
                        menuList.map((data) => (
                            <div onClick={() => { setDynamicCompo(data.component) }} className="text-gray-600 hover:text-gray-800 font-medium px-5 py-2 text-lg hover:bg-slate-200  rounded-[8px]" key={data.id}>
                                {data.name}
                            </div>
                        ))
                    }
                </div>

                <div className=" mb-4 w-full  rounded-lg text-red-400 font-bold hover:text-red-700 cursor-pointer text-center">logOut</div>
            </div>

        </div>
    )
}

export default Sidebar