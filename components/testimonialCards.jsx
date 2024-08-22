import Image from "next/image";
import { FaStar } from "react-icons/fa";

import { testimonials } from "@/data/dummy";

const TestimonialCards = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between gap-8">
        {testimonials.map((item, id) => {
          return (
            <div
              key={id}
              className="flex flex-col p-4 gap-6 justify-between bg-white shadow-md rounded-md relative"
            >
              <div className="stars flex">
                {Array.from({ length: Number(item.stars) }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <div className="description">
                <span>{item.description}</span>
              </div>
              <div className="flex justify-between w-full ">
                <div className="user flex gap-4 w-full items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-500 relative">
                    <Image
                      src={item.clientImage}
                      className="w-full h-full object-contain"
                      alt="client image"
                      fill
                      unoptimized
                    />
                  </div>
                  <div className="">
                    <div className="">
                      <span>{item.clientName}</span>
                    </div>
                    <div className="">
                      <span>{item.clientRole}</span>
                    </div>
                  </div>
                </div>
                <div className="w-[60px] h-[60px]  absolute bottom-4 right-4">
                  <span className="text-right text-6xl text-muted-foreground tracking-tight">
                    &quot;
                  </span>
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
