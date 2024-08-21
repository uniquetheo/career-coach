import { FaArrowRight } from "react-icons/fa6";
import { Button } from "./ui/button";
import Image from "next/image";

const cta = [
  {
    title: "Become a Candidate",
    description:
      "Land your perfect job with ease and style. Register now for a seamless job search experience tailored just for you!",
    action: "Register Now",
    bgImg: "/mantyping.jpg",
  },
  {
    title: "Become an Employer",
    description:
      "Find your ideal candidate effortlessly. Register now and secure the perfect match for your open position!",
    action: "Get started Now",
    bgImg: "/womantyping.jpg",
  },
];

const CtaSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-12 px-12">
      <div className="flex justify-between items-center gap-8">
        {cta.map((item, id) => {
          return (
            <div
              key={id}
              className="flex flex-col gap-6 p-8 border rounded-lg w-full relative"
            >
              <div className="absolute w-full h-full top-0 left-0">
                <Image
                  className="w-full h-full object-cover rounded-lg z-10"
                  src={item.bgImg}
                  alt=""
                  fill
                  unoptimized
                />
              </div>
              <div
                className={`text-2xl  z-20 ${
                  id % 2 ? "text-white" : "text-black"
                }`}
              >
                <span
                  className={`max-w-96 ${
                    id % 2 ? "bg-[#000]/20" : "bg-white/20"
                  }`}
                >
                  {item.title}
                </span>
              </div>
              <div className="desc max-w-96 z-20 tracking-wide">
                <span
                  className={`${
                    id % 2
                      ? "bg-[#000]/20 text-white"
                      : "bg-white/20 text-black"
                  }`}
                >
                  {item.description}
                </span>
              </div>
              <div className="btn z-20">
                <Button
                  variant={id % 2 ? "secondary" : ""}
                  className="flex gap-2"
                >
                  {item.action}
                  <FaArrowRight />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CtaSection;
