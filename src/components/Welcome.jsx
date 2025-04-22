
import Image from 'next/image'
import React from 'react'

function Welcome() {
    return (
        <div className="flex  flex-row justify-evenly py-5 px-10 items-center">
            <h1 className="md:text-3xl font-semibold text-lg text-gray-900">Welcome Back, <br /> Himal Hasan</h1>
            <div className="md:w-[300px] md:h-[300px] w-[70px] h-[70px]  rounded-full overflow-hidden ring-2 ring-blue-500">
                <Image
                    src="/men.jpg"
                    width={300}
                    height={300}
                    className="object-cover"
                    alt="profile"
                />
            </div>


        </div>
    )
}

export default Welcome