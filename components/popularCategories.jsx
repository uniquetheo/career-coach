import React from "react";
import { Button } from "./ui/button";
import {
  FaBullhorn,
  FaCalculator,
  FaCode,
  FaDatabase,
  FaMusic,
  FaPaintbrush,
  FaRightLong,
  FaStethoscope,
  FaVideo,
} from "react-icons/fa6";
import { FaCogs, FaShoppingCart } from "react-icons/fa";

const categories = [
  {
    name: "Graphics & Design",
    number: "25387",
    icon: <FaPaintbrush className="w-full h-full p-4" />,
  },
  {
    name: "Web Design & Development",
    number: "25387",
    icon: <FaCode className="w-full h-full p-4" />,
  },
  {
    name: "Digital Marketing",
    number: "25387",
    icon: <FaBullhorn className="w-full h-full p-4" />,
  },
  {
    name: "Video & Animation",
    number: "25387",
    icon: <FaVideo className="w-full h-full p-4" />,
  },
  {
    name: "Music & Audio Production",
    number: "25387",
    icon: <FaMusic className="w-full h-full p-4" />,
  },
  {
    name: "Account & Finance",
    number: "25387",
    icon: <FaCalculator className="w-full h-full p-4" />,
  },
  {
    name: "Health and Care",
    number: "25387",
    icon: <FaStethoscope className="w-full h-full p-4" />,
  },
  {
    name: "Data Science",
    number: "25387",
    icon: <FaDatabase className="w-full h-full p-4" />,
  },
  {
    name: "Engineering",
    number: "25387",
    icon: <FaCogs className="w-full h-full p-4" />,
  },
  {
    name: "Procurement",
    number: "25387",
    icon: <FaShoppingCart className="w-full h-full p-4" />,
  },
];

const PopularCategories = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-12 px-12">
      <div className="flex flex-col w-full gap-4">
        <div className="heading w-full flex justify-between mb-8">
          <h3 className="text-3xl text-center font-semibold leading-none tracking-tight">
            Popular Categories
          </h3>
          <div className="button">
            <Button className="flex gap-2">
              View More <FaRightLong />
            </Button>
          </div>
        </div>
        <div className="body">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((item, id) => {
              return (
                <div
                  key={id}
                  className="w-full flex gap-4 bg-white rounded shadow-sm p-4"
                >
                  <div className="h-[72px] min-w-[72px] bg-[#0A65CC]/10 text-[#0A65CC] hover:bg-[#0A65CC] hover:text-slate-100 rounded border">
                    {item.icon}
                  </div>
                  <div className="w-full h-full flex flex-col justify-center ">
                    <div className="tracking-tight text-md font-bold">
                      {item.name}
                    </div>
                    <div className="text-muted-foreground">
                      {parseInt(item.number).toLocaleString()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
