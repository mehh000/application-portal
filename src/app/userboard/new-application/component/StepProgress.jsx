import React from 'react'
import { Stepper, Step } from 'react-form-stepper';
function StepProgress({nextStep}) {
  return (
    <Stepper activeStep={next ? 0 : 1} styleConfig={{
        activeBgColor: '#2563eb', // blue-600
        activeTextColor: '#fff',
        completedBgColor: '#22c55e', // green-500
        completedTextColor: '#fff',
      }}>
        <Step label="Application Type" />
        <Step label="Review & Submit" />
      </Stepper>
  )
}

export default StepProgress