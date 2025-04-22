'use client'

import React from 'react'

import Card from './Components/Card'

function TemplateLibery() {
    return (
        <div className="flex-1 p-4 w-full flex flex-wrap justify-center gap-6 overflow-y-scroll">
            {/* Card */}
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default TemplateLibery
