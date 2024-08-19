import React from "react";
import { AiOutlineRobot, AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { MdQuestionAnswer } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const steps = [
  {
    title: "Create Account",
    description: "Setup an account with Career Coach",
    icon: <AiOutlineUserAdd />,
  },
  {
    title: "Choose a Job/Role",
    description: "Choose a job role that you qualify the most for",
    icon: <HiOutlineClipboardCheck />,
  },
  {
    title: "AI Generated CV and Cover Letter",
    description:
      "A cover letter and CV is genrated from the job of choice and your skills",
    icon: <AiOutlineRobot />,
  },
  {
    title: "Mock Interview and Analyses",
    description:
      "Undertake a mock interview to groom you for the Job Interview",
    icon: <MdQuestionAnswer />,
  },
  {
    title: "Get Dream Job",
    description:
      "Share helpful resources on new role and coach you through your career",
    icon: <FaStar />,
  },
  {
    title: "Get Trained for Promotions",
    description:
      "Get training from professional in your field to on career growth paths",
    icon: <FaStar />,
  },
];

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
                className={`flex flex-col items-center gap-4 p-6 mb-8 rounded-md xl:w-[430px] w-[300px] ${
                  id % 2 ? "bg-white shadow" : ""
                }`}
              >
                <div className="icon text-[100px]">{step.icon}</div>
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  {step.title}
                </div>
                <div>{step.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
