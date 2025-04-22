'use client'

import React, { useState } from 'react';

import Image from 'next/image';

import { ArrowBigLeft, DownloadIcon, Printer, Send, Share2 } from 'lucide-react';
import ApplicationComponent from './component/Application';
import StepProgress from './component/StepProgress';

function AddApplication() {
  const [application, setApplication] = useState('');
  const [nextStep, setNextStep] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [customType, setCustomType] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [viewApplication, setViewApplication] = useState(true);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedType(value);
    setShowCustomInput(value === 'Custom');
  };

  const handleViewApplication = () => {
    setViewApplication(!viewApplication)
   }
  const handleDownlaodApplication = () => { }
  const handlePrintViewApplication = () => { }
  const handleShareApplication = () => { }
  const handleSendApplication = () => { }

  return (
    <div className="w-full overflow-y-scroll flex flex-col">


      {/* Step progress bar */}

      <div className="w-full px-4 md:px-10 mt-3">
        <StepProgress nextStep={nextStep} />
      </div>


      {/* Form content */}
      <div className="px-4 md:px-10 w-full  mx-auto pt-5">
        {nextStep ? (
          <>
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

            <textarea
              value={application}
              onChange={(e) => setApplication(e.target.value)}
              className="mt-6 w-full h-60 p-4 border rounded-lg resize-none"
              placeholder="Write your application here..."
            />
          </>
        ) : (
          (viewApplication ? <div className="w-full flex items-center justify-center flex-col gap-3">
            <Image src={'/done.png'} height={250} width={250} alt="done" />
            <button onClick={handleViewApplication} className="w-fit px-5 py-2 bg-blue-200 hover:text-white hover:bg-blue-500 cursor-pointer text-blue-500 font-semibold rounded-lg">
              View Application
            </button>
          </div> : <div className='w-full flex items-center justify-center' ><ApplicationComponent /></div>)
        )}
      </div>

      {/* Navigation buttons */}
      <div className="w-full pt-6 px-4 md:px-10 max-w-2xl mx-auto">
        {nextStep ? (
          <button
            onClick={() => setNextStep(false)}
            className="py-3 px-5 bg-green-500 hover:bg-emerald-500 text-white font-semibold rounded-lg float-right"
          >
            Next
          </button>
        ) : (
          <div className="flex py-3 flex-row justify-end gap-2">
            <button
              onClick={() => setNextStep(true)}
              className="px-4 py-2 flex flex-row gap-1 rounded-lg bg-gray-900 text-white"
            >
              <ArrowBigLeft size={20} color='gray' /> Back
            </button>
            <button className="px-4 flex flex-row gap-1 py-2 rounded-lg bg-red-400 text-white">
              <DownloadIcon size={20} color='white' /> Download
            </button>
            <button className="px-4 flex flex-row gap-1 py-2 rounded-lg bg-blue-500 text-white">
              <Printer size={20} color='white' /> Print
            </button>
            <button className="px-4 flex flex-row gap-1 py-2 rounded-lg bg-orange-500 text-white">
              <Share2 size={20} color='white' /> Share
            </button>
            <button className="px-4 flex flex-row gap-1 py-2 rounded-lg bg-blue-500 text-white">
              <Send size={20} color='white' />  Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddApplication;
