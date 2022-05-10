import React from 'react'
import heroarea from '../../../static/img/heroarea.png'
const Banner = () => {
  return (
    <div className="w-full bg-color-banner flex justify-center items-center" style={{minHeight:'600px',paddingTop:'80px'}}>
        <div className="lg:w-8/12 w-11/12 flex lg:flex-row flex-col lg:py-0 py-16">
            <div className="w-1/2 text-color-fff flex justify-center lg:pb-0 pb-6 ">
                <div className="md:w-10/12 w-full">
                    <div className="text-xl text-color-red font-semibold">NEW CRYPTO GAME</div>
                    <div className="text-5xl text-color-fff font-bold">PLAY TO WIN</div>
                    <div className="text-lg text-color-5">Play, Invest,Exchange and Join the Contest with high rewards at Dooplo!</div>
                </div>
            </div>
            <div className="lg:w-1/2 w-full text-color-fff flex justify-center">
                <img src={heroarea} alt='heroarea' className="lg:w-full w-10/12"/>
            </div>
        </div>
    </div>
  )
}

export default Banner