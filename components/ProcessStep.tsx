import React from 'react'
import { processStepType } from '@/dataTypes'

const ProcessStep = ({step} : {step : processStepType}) => {
  return (
    <div>
        {step.title}
    </div>
  )
}

export default ProcessStep