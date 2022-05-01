import React from 'react'
import logo from '../../../static/img/logo.png'
import './a.css'
const FeaturesHeader = () => {
  return (
    <>
    <div className="w-full h-20 flex justify-center items-center bg-theme-header ">
      <div className="w-9/12 h-full flex ">
        <div className="w-1/4">
          <img src={logo} alt='' className="w-1/2 h-full object-contain"/>
        </div>
        <div className="w-1/2 flex justify-between items-center text-color-fff text-lg">
          <div className="flex h-full items-center p-4 border-b-4 cursor-pointer border-theme-header hover:border-color-red">About</div>
          <div className="flex h-full items-center p-4 border-b-4 cursor-pointer border-theme-header hover:border-color-red">Curriculum</div>
          <div className="flex h-full items-center p-4 border-b-4 cursor-pointer border-theme-header hover:border-color-red">News</div>
          <div className="flex h-full items-center p-4 border-b-4 cursor-pointer border-theme-header hover:border-color-red">Contact</div>
        </div>
        <div className="w-1/4 flex justify-center items-center text-color-fff ">
          <div className="w-1/3 p-3 border rounded-3xl border-color-red bg-color-red text-center cursor-pointer">Join Us</div>
        </div>
        
      </div>
    </div>

      {/* Join Us */}
 
    </>
    
  )
}

export default FeaturesHeader