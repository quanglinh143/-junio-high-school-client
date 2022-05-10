import React from 'react'
import '../header/a.css'
import { FaAngleDoubleRight } from 'react-icons/fa';
const FeaturesFooter = () => {
  return (
    <div className="bg-hero-pattern flex justify-center items-center" style={{height:'500px'}}>
        <div className="lg:w-8/12 w-4/5 h-3/5 flex justify-around text-color-fff">
            <div className="w-1/4 px-2">
                <span>About</span>
                <ul>
                    <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">About Us</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Contact Us</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis"> Latest Blog</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis"> Authenticity Guarantee</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis"> Customer Reviews</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis"> Privacy Policy</span></li>
                </ul>
            </div>
            
            <div className="w-1/4 px-2">
                <span>MY ACCOUNT</span>
                <ul>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis"> Manage Your Account</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">How to Deposit</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">How to Withdraw</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Account Varification </span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Safety & Security</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Membership Level</span></li>
                </ul>
            </div>

            <div className="w-1/4 px-2">
                <span>HELP CENTER</span>
                <ul>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Help centre</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">FAQ</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Quick Start Guide</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Tutorials</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Borrow</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Lend</span></li>
                </ul>
            </div>

            <div className="w-1/4 px-2">
                <span>LEGAL INFO</span>
                <ul>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Risk Warnings</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Privacy Notice</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Security </span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Terms of Service</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Become Affiliate</span></li>
                   <li className="ease-in duration-300 hover:pl-6 flex items-center hover:text-color-red cursor-pointer"><FaAngleDoubleRight/> <span className="pl-1 whitespace-nowrap overflow-hidden text-ellipsis">Complaints Policy</span></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FeaturesFooter;