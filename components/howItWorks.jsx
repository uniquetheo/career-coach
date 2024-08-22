import React from "react";

import { steps } from "@/data/dummy";


const HowItWorks = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-12 px-12">
      <div className="">
        <div className="text-3xl text-center w-full mb-12 font-semibold  tracking-tight ">
          <h2>How it Works</h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 w-full justify-between gap-4 text-center my-6">
          {steps.map((step, id) => {
            return (
              <div
                key={id}
                className={`flex flex-col items-center gap-4 p-6 mb-8 rounded-md xl:w-[430px] w-[300px] relative ${
                  id % 2 ? "bg-white shadow" : ""
                }`}
              >
                <div className="icon text-[100px]">{step.icon}</div>
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  {step.title}
                </div>
                <div>{step.description}</div>
                <div className="w-[60px] h-[60px] hidden absolute top-4 right-4 bg-blue-600/10 z-20 rounded-full shadow">
                  <span className="w-full h-full flex items-center justify-center text-2xl font-bold tracking-tight">
                    {id + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
