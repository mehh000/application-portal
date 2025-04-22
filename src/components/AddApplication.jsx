'use client'

import React, { useState } from 'react';
import Header from './Header';
import Image from 'next/image';
import { Stepper, Step } from 'react-form-stepper';

function AddApplication() {
  const [application, setApplication] = useState('');
  const [next, setNext] = useState(true);
  const [selectedType, setSelectedType] = useState('');
  const [customType, setCustomType] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleSelectChange = () => {
    const value = e.target.value;
    setSelectedType(value);
    setShowCustomInput(value === 'Custom');
  };

  return (
    <div className="w-full flex flex-col">
      <Header />

      {/* Step progress bar */}
      <div className="w-full px-4 md:px-10 mt-6">
        {/* <Stepper activeStep={next ? 0 : 1} styleConfig={{
          activeBgColor: '#2563eb', // blue-600
          activeTextColor: '#fff',
          completedBgColor: '#22c55e', // green-500
          completedTextColor: '#fff',
        }}>
          <Step label="Application Type" />
          <Step label="Review & Submit" />
        </Stepper> */}
      </div>

      {/* Form content */}
      <div className="px-4 md:px-10 w-full max-w-2xl mx-auto pt-10">
        {next ? (
          <>
            {/* <select
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
            </select> */}
            {showCustomInput && (
              <input
                type="text"
                className="mt-4 w-full p-2 border rounded-lg"
                placeholder="Enter your custom application type"
                value={customType}
                onChange={(e) => setCustomType(e.target.value)}
              />
            )}

            <textarea
              value={application}
              onChange={(e) => setApplication(e.target.value)}
              className="mt-6 w-full h-60 p-4 border rounded-lg resize-none"
              placeholder="Write your application here..."
            />
          </>
        ) : (
          <div className="w-full flex items-center justify-center flex-col gap-3">
            <Image src={'/done.png'} height={250} width={250} alt="done" />
            <div className="w-fit px-5 py-2 bg-blue-200 hover:text-white hover:bg-blue-500 cursor-pointer text-blue-500 font-semibold rounded-lg">
              View Application
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="w-full pt-6 px-4 md:px-10 max-w-2xl mx-auto">
        {next ? (
          <button
            onClick={() => setNext(false)}
            className="py-3 px-5 bg-green-500 hover:bg-emerald-500 text-white font-semibold rounded-lg float-right"
          >
            Next
          </button>
        ) : (
          <div className="flex flex-row justify-end gap-2">
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
