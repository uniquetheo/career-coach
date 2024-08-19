import Image from "next/image";
import NavMenu from "./navmenu";
import { FiPhoneCall } from "react-icons/fi";
import { FaBriefcase, FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { fi } from "flag-icons";

const languages = [
  { name: "English", value: "english", flag: "/next.svg", code: "us" },
  { name: "Italian", value: "italian", flag: "/next.svg", code: "it" },
  { name: "French", value: "french", flag: "/next.svg", code: "fr" },
  { name: "Spanish", value: "spanish", flag: "/next.svg", code: "es" },
  { name: "German", value: "german", flag: "/next.svg", code: "de" },
  { name: "Portuguese", value: "portuguese", flag: "/next.svg", code: "pt" },
];

const NavBar = () => {
  return (
    <nav className="w-full h-[138px] sticky top-0 z-10">
      <div className="border flex flex-col">
        <div className="bg-[#F1F2F4]">
          <div className="h-12 max-w-[1440px] flex justify-between items-center mx-auto px-12">
            <div className="h-full">
              <NavMenu />
            </div>
            <div className="flex gap-6 h-full items-center">
              <div className="h-full flex items-center gap-2">
                <FiPhoneCall />
                <span>+233-546-845-585</span>
              </div>
              <div className="flex">
                <Select className="">
                  <SelectTrigger className="min-w-[160px] flex border-none">
                    <SelectValue placeholder={`${languages[0].name}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="">
                      {languages.map((item, id) => {
                        return (
                          <SelectItem
                            key={id}
                            value={item.value}
                            className="flex"
                          >
                            <span className={`fi fi-${item.code} mr-2`}></span>
                            {item.name}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="h-[90px] max-w-[1440px] flex justify-between items-center mx-auto px-12">
            <div className="flex gap-8 items-center">
              <div className="h-full flex items-center gap-4 text-[#0A65CC]">
                <FaBriefcase className="w-8 h-8" />
                <span className="text-xl font-bold">Career Coach</span>
              </div>
              <div className="h-full">
                <div className="flex justify-between border-2 rounded-md">
                  <Select className="min-w-[250px]">
                    <SelectTrigger className="border-none">
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="china">China</SelectItem>
                        <SelectItem value="botswana">Botswana</SelectItem>
                        <SelectItem value="rwanda">Rwanda</SelectItem>
                        <SelectItem value="morocco">Morocco</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <div className="h-7 my-auto mx-4 border-l-2 "></div>
                  <div className="w-10 h-10 flex items-center">
                    <FaSearch className="" />
                  </div>
                  <Input
                    id="search"
                    type="text"
                    placeholder="Job title, keyword, company"
                    className="min-w-[400px] border-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">Sign in</Button>
              <Button>Post a Job</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
