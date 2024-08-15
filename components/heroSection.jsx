import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { FaLocationArrow, FaSearch } from "react-icons/fa";
import HeroCards from "./heroCards";

const suggestions = [
  { name: "Designer" },
  { name: "Developer" },
  { name: "Digital Marketing" },
  { name: "Video Editing" },
];

const HeroSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto space-y-8">
      <div className="grid grid-cols-2  gap-8 justify-between">
        <div className="cta flex flex-col gap-8 justify-center">
          <div className="text-bold text-3xl">
            <h1>Find a job that suits your interest & skills.</h1>
          </div>
          <div className="text-bold text-sm">
            <p>
              Unlock Your Future: Tailored Job Matches, Expert CV Guidance, and
              AI-Powered Interview Prep. Start Your Journey to Success Today!
            </p>
          </div>
          <div className="input grid">
            <div className="bg-white h-[56px] border rounded flex items-center justify-between px-4">
              <div className="flex w-full justify-between">
                <div className="pl-2 text-slate-500 flex items-center">
                  <FaSearch />
                </div>
                <Input
                  className="w-full border-none"
                  placeholder="Job Title, Keyword"
                />
                <div className="border-l-2 pl-2 text-slate-500 flex items-center">
                  <FaLocationArrow />
                </div>
                <Input
                  className="w-full border-none "
                  placeholder="Your location"
                />
              </div>
              <Button>Find Job</Button>
            </div>
          </div>
          <div className="extra-text flex space-x-2">
            <span className="text-muted-foreground">Suggestions:</span>
            <div className="sugesstions">
              {suggestions.map((item, id) => (
                <span key={id} className="hover:text-[#0A65CC] cursor-pointer">
                  {item.name}
                  {id === suggestions.length - 1 ? "." : ", "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Image
            src="/hero.svg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="w-full">
        <HeroCards />
      </div>
    </div>
  );
};

export default HeroSection;
