import React from "react";
import bill from "../../../../static/img/bill.jpg";
const Introduce = () => {
  return (
    <div
      className="w-full flex flex-col items-center bg-hero-pattern"
      style={{ minHeight: "500px" }}
    >
      <div className="text-color-fff py-4 text-2xl">
        Apps143- No.1 Platform In Vietnam
      </div>
      <div className="text-color-5 text-xs pb-12">{`/ / / / / / / / / / / / / /`}</div>
      <div className="xl:w-8/12 lg:w-10/12 flex flex-col md:flex-row items-center ">
        <div className="md:w-1/2 w-9/12 text-color-fff mb-8">
          <img src={bill} alt="bill" className="w-full object-cover"  />
        </div>
        <div className="md:w-1/2 w-9/12 text-color-fff pl-4">
          <div className="underline underline-offset-1 flex md:justify-start justify-center">
            COMMITMENT TO OUTPUT BY CONTRACT
          </div>
          <div className="text-color-fff py-2">
            Microsoft Teams is the ultimate messaging app for your organization.
          </div>
          <div className="text-color-fff">
            A workspace for real-time collaboration and communication, meetings,
            file and app sharing, and even the occasional emoji! All in one
            place, all in the open, all accessible to everyone.
          </div>
          <button className="rounded-3xl bg-color-red text-color-fff py-3 px-10 mt-4  flex justify-items-end">
            Join us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
