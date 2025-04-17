'use client';

import React, { useState } from 'react';
import Header from './Header';
import Image from 'next/image';

function AddApplication() {
    const [application, setApplication] = useState('');
    const [next, setNext] = useState(true);
    const [selectedType, setSelectedType] = useState('');
    const [customType, setCustomType] = useState('');
    const [showCustomInput, setShowCustomInput] = useState(false);

    const handleSelectChange = (e) => {
        const value = e.target.value;
        setSelectedType(value);
        if (value === 'Custom') {
            setShowCustomInput(true);
        } else {
            setShowCustomInput(false);
        }
    };

    return (
        <div className="w-full flex flex-col">
            <Header />
            <div className="w-full justify-center items-center flex flex-col">
                <div className="w-[40%] flex flex-row items-center ">
                    <div className="w-[50%] border-gray-400 border-2 border-dotted"></div>
                    <div className="w-[50%] border-gray-400 border-2 border-dotted"></div>
                </div>
                <div className="w-full relative">
                    <div className="w-full absolute inset-0 z-50 flex items-center justify-evenly">
                        <div className={`px-5 py-2 bg-slate-200 rounded-full font-semibold text-xl text-gray-700`}>1</div>
                        <div className="px-5 py-2 bg-slate-200 rounded-full font-semibold text-xl text-gray-700">2</div>
                    </div>
                </div>
            </div>

            <div className="px-10 w-full pt-10">
                <select
                    name="applicationType"
                    className="border w-full rounded-lg p-2"
                    value={selectedType}
                    onChange={handleSelectChange}
                >
                    <option value="" disabled>Select application type</option>
                    <option value="Leave of absence">Leave of absence</option>
                    <option value="Sick leave">Sick leave</option>
                    <option value="Vacation leave">Vacation leave</option>
                    <option value="Emergency leave">Emergency leave</option>
                    <option value="Custom">Custom</option>
                </select>
                {showCustomInput && (
                    <input
                        type="text"
                        className="mt-4 w-full p-2 border rounded-lg"
                        placeholder="Enter your custom application type"
                        value={customType}
                        onChange={(e) => setCustomType(e.target.value)}
                    />
                )}
            </div>

            {next ? (
                <textarea
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                    className="mt-10 mx-10 h-60 p-4 border rounded-lg resize-none"
                    placeholder="Write your application here..."
                />
            ) : (
                <div className="w-full flex items-center justify-center flex-col gap-3">
                    <Image src={'/done.png'} height={250} width={250} alt="done" />
                    <div className="w-fit px-5 py-2 bg-blue-200 hover:text-white hover:bg-blue-500 cursor-pointer text-blue-500 font-semibold">
                        View Application
                    </div>
                </div>
            )}

            <div className="w-full pt-6 px-5">
                {next ? (
                    <button
                        onClick={() => setNext(false)}
                        className="py-5 px-3 hover:bg-emerald-500 rounded-xs text-white bg-green-500 float-right"
                    >
                        Next
                    </button>
                ) : (
                    <div className="flex flex-row items-end justify-end gap-2">
                        <button
                            onClick={() => setNext(true)}
                            className="px-4 py-2 rounded-lg bg-gray-900 text-white"
                        >
                            Back
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white">
                            Send
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddApplication;
