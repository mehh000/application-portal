'use client'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function layout({ children }) {
    return (
        <div className="w-full h-svh flex flex-row bg-slate-100">
            {/* side here */}
            <Sidebar />
            <div className="flex flex-col w-full h-full">
                <Header />
                {children}
            </div>

        </div>

    )
}

export default layout