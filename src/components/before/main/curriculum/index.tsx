import React from "react";
import cloud from "../../../../static/img/cloud.svg";
const Curriculum = () => {
  return (
    <div
      className="w-full bg-hero-pattern flex justify-center items-center pt-16"
      style={{ minHeight: "500px" }}
    >
      <div className="w-9/12 flex flex-wrap justify-between ">
        <div
          className="xl:w-1/4 lg:w-1/2 md:w-1/2 w-full text-color-fff flex justify-center relative mb-16"
          style={{ minHeight: "150px" }}
        >
          <div className="w-10/12 border border-color-6 pl-8 rounded">
            <img
              className="absolute"
              style={{ width: "70%", top: "-30px", left: "15%" }}
              src={cloud}
              alt=""
            />
            <div
              className="absolute text-color-red font-semibold"
              style={{ width: "70%", top: "-15px", left: "40%" }}
            >
              Grade 6
            </div>
            <ul className="text-color-fff mt-8 py-2 list-disc pt-7">
              <li className="cursor-pointer">Greetings, At school</li>
              <li className="cursor-pointer">Big or small?</li>
              <li className="cursor-pointer">Things I do, Places</li>
              <li className="cursor-pointer">What do you eat? </li>
              <li className="cursor-pointer">Sports and pastimes</li>
              <li className="cursor-pointer">Making plans</li>
            </ul>
          </div>
          
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 w-full text-color-fff flex justify-center relative mb-16">
          <div className="w-10/12 border border-color-6 pl-8 rounded">
            <img
              className="absolute"
              style={{ width: "70%", top: "-30px", left: "15%" }}
              src={cloud}
              alt=""
            />
            <div
              className="absolute text-color-red font-semibold"
              style={{ width: "70%", top: "-15px", left: "40%" }}
            >
              Grade 7
            </div>
            <ul className="text-color-fff mt-8 py-2 list-disc pt-7">
              <li className="cursor-pointer">Work and play</li>
              <li className="cursor-pointer">The world of work</li>
              <li className="cursor-pointer">At home and away</li>
              <li className="cursor-pointer">Health and hygiene </li>
              <li className="cursor-pointer">Keep fit, stay healthy</li>
              <li className="cursor-pointer">People and places</li>
            </ul>
          </div>
        </div>
        <div className="xl:w-1/4  lg:w-1/2 md:w-1/2 w-full text-color-fff flex justify-center relative mb-16">
          <div className="w-10/12 border border-color-6 pl-8 rounded">
            <img
              className="absolute"
              style={{ width: "70%", top: "-30px", left: "15%" }}
              src={cloud}
              alt=""
            />
            <div
              className="absolute text-color-red font-semibold"
              style={{ width: "70%", top: "-15px", left: "40%" }}
            >
              Grade 8
            </div>
            <ul className="text-color-fff mt-8 py-2 list-disc pt-7">
              <li className="cursor-pointer">Making arrangements</li>
              <li className="cursor-pointer">At home, Our past</li>
              <li className="cursor-pointer">The young pioneers club</li>
              <li className="cursor-pointer">My neighborhood </li>
              <li className="cursor-pointer">A first-aid course</li>
              <li className="cursor-pointer">A vacation abroad</li>
            </ul>
          </div>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 w-full text-color-fff flex justify-center relative mb-16">
          <div className="w-10/12 border border-color-6 pl-8 rounded">
            <img
              className="absolute"
              style={{ width: "70%", top: "-30px", left: "15%" }}
              src={cloud}
              alt=""
            />
            <div
              className="absolute text-color-red font-semibold"
              style={{ width: "70%", top: "-15px", left: "40%" }}
            >
              Grade 9
            </div>
            <ul className="text-color-fff mt-8 py-2 list-disc pt-7">
              <li className="cursor-pointer">Saving energy</li>
              <li className="cursor-pointer">Celebrations</li>
              <li className="cursor-pointer">Natural disasters</li>
              <li className="cursor-pointer">Grammar, Glossary </li>
              <li className="cursor-pointer"> A visit from a pen pal</li>
              <li className="cursor-pointer">A trip to the countryside</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
