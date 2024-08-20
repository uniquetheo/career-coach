import React from "react";
import { Button } from "./ui/button";
import { FaRightLong } from "react-icons/fa6";
import TestimonialCards from "./testimonialCards";

const Testimonial = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-12 px-12">
      <div className="flex flex-col gap-4">
        <div className="heading w-full flex justify-between mb-8">
          <h3 className="text-3xl text-center font-semibold leading-none tracking-tight">
            Client Testimonials
          </h3>
          <div className="button">
            <Button className="flex gap-2">
              View More <FaRightLong />
            </Button>
          </div>
        </div>
        <div className="body">
            <TestimonialCards />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
