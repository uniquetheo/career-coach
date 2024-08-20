import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    stars: "5",
    description:
      "Career Assistant made my job search easy and stress free. You feel confident with the post interview training.",
    clientName: "Robert Fox",
    clientImage: "",
    clientRole: "UI/UX Designer",
  },
  {
    stars: "5",
    description:
      "Career Assistant made my job search easy and stress free. You feel confident with the post interview training.",
    clientName: "Robert Fox",
    clientImage: "",
    clientRole: "UI/UX Designer",
  },
  {
    stars: "5",
    description:
      "Career Assistant made my job search easy and stress free. You feel confident with the post interview training.",
    clientName: "Robert Fox",
    clientImage: "",
    clientRole: "UI/UX Designer",
  },
];

const TestimonialCards = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between gap-8">
        {testimonials.map((item, id) => {
          return (
            <div
              key={id}
              className="flex flex-col p-4 gap-6 justify-between bg-white shadow-md rounded-md"
            >
              <div className="stars text-yellow-600">
                {<FaStar />}
              </div>
              <div className="description">
                <span>{item.description}</span>
              </div>
              <div className="flex justify-between w-full ">
                <div className="user flex gap-4 w-full items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-500"></div>
                  <div className="">
                    <div className="">
                      <span>{item.clientName}</span>
                    </div>
                    <div className="">
                      <span>{item.clientRole}</span>
                    </div>
                  </div>
                </div>
                <div className="text-6xl tracking-tight flex justify-end">
                  <span className="text-right">&quot;</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialCards;
