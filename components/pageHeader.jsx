import React from "react";
import { Button } from "./ui/button";
import { FaArrowRightLong, FaBookmark } from "react-icons/fa6";

// const jobDetails = [{title: "Senior React Developer", description: ""}]

const PageHeader = ({ title, action }) => {
  return (
    <div className="max-w-[1440px] mx-auto py-12 px-12">
      <div className="content flex justify-between">
        <div className="">
          <h3>{title}</h3>
        </div>
        <div className="flex gap-4 justify-between">
          <Button variant="secondary">
            <FaBookmark />
          </Button>
          <Button className="flex gap-2">
            {action}
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
