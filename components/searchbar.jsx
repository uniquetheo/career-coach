import React from "react";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImTarget } from "react-icons/im";
import { Button } from "./ui/button";
import { MdFilterList } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-6 px-12">
      <div className="w-full h-[60px] grid grid-cols-2 border rounded-lg shadow-md text-2xl">
        <div className="flex w-full h-full items-center px-5">
          <FaSearch />
          <Input
            className="border-none"
            placeholder="Search by: Job Title, Position, Keyword..."
          />
        </div>
        <div className="flex border-l-2 w-full h-full items-center pl-5">
          <div className="flex w-full h-full items-center">
            <FaLocationDot />
            <Input
              className="border-none"
              placeholder="City, state or zip code..."
            />
            <ImTarget  className="text-3xl"/>
            <div className="btns flex gap-3 ml-6 pr-3">
                <Button variant="secondary" className="flex gap-2"><MdFilterList className="text-2xl"/>Filters</Button>
                <Button>Find Job</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
