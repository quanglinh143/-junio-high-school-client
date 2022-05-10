import React, { useState, useEffect } from "react";
import logo from "../../../static/img/logo.png";
import "./a.css";
import { FaBars } from "react-icons/fa";
import Banner from "./Banner";
const FeaturesHeader = () => {
  const [bars, setBar] = useState(false);
  const [tabBar, setTabBar] = useState(false);
  const [resize, setResize] = useState(0);
  useEffect(() => {
    function handleResize() {
      setResize(window.innerWidth);
      if (resize <= 1000) {
        setBar(true);
      } else {
        setBar(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  // "w-full h-20 flex justify-center items-center bg-theme-header "
  // ${
  //   tabBar ? "h-60 ease-in duration-200" : "h-20"
  // }
  return (
    <>
      <div
        className={`w-full absolute  bg-theme-header `}
      >
        <div className="w-full h-20 flex justify-center items-center bg-theme-header  ">
          <div className="w-9/12 h-full flex ">
            <div className="w-1/4">
              <img src={logo} alt="" className="w-1/2 h-full object-contain" />
            </div>
            <div className={`w-3/4 ${bars ? " " : "flex justify-center"}`}>
              <div className={`w-full flex justify-between items-center bg-theme-header  ${tabBar?'absolute flex-col':''} text-color-fff text-lg `}
                style={{top:tabBar?'80px':0,left:tabBar?0:''}}
              >
                <div className="flex h-full items-center p-4 border-b-4 cursor-pointer border-theme-header hover:border-color-red">
                  About
                </div>
                <div className="flex h-full items-center p-4 border-b-4 cursor-pointer border-theme-header hover:border-color-red">
                  Curriculum
                </div>
                <div className="flex h-full items-center p-4 border-b-4 cursor-pointer border-theme-header hover:border-color-red">
                  News
                </div>
                <div className="flex h-full items-center p-4 border-b-4 cursor-pointer border-theme-header hover:border-color-red">
                  Contact
                </div>
                <div className="w-1/4  p-3 border rounded-3xl border-color-red bg-color-red text-center cursor-pointer">
                  Join Us
                </div>
              </div>
              {/* <div className="w-1/4 flex justify-center items-center text-color-fff ">
                <div className=" w-7/12 p-3 border rounded-3xl border-color-red bg-color-red text-center cursor-pointer">
                  Join Us
                </div>
              </div> */}
            </div>
          </div>
          
          <div
            className={`cursor-pointer ${bars ? "block" : "hidden"}`}
            onClick={() => setTabBar(!tabBar)}
          >
            <FaBars />
          </div>
        </div>
        {/* columns */}
        {/* <div className="w-full flex justify-center">
          <div className={`w-3/4 ${bars ? "block" : "hidden"}`}>
            <div>AA</div>
          </div>
        </div> */}
      </div>

      {/* Join Us */}
      <Banner />
    </>
  );
};

export default FeaturesHeader;
