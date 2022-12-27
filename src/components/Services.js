import React from 'react'
import Lottie from "lottie-react"
import responsive from "../lottie/responsive.json";

export default function Services() {
  return (
    <div>
        <Lottie className='w-64 h-64' animationData={responsive} loop={true} />
    </div>
  )
}

