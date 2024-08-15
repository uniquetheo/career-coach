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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const NavBar = () => {
  return (
    <nav className="w-full h-[138px] sticky top-0 z-10">
      <div className="border flex flex-col">
        <div className="bg-[#F1F2F4]">
          <div className="h-12 max-w-[1440px] flex justify-between items-center mx-auto">
            <div className="h-full">
              <NavMenu />
            </div>
            <div className="flex">
              <div className="h-full flex items-center gap-2">
                <FiPhoneCall />
                <span>+233-546-845-585</span>
              </div>
              <div className="flex">
                <Image src="/usa.svg" alt="usa flag" width={24} height={24} />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="h-[90px] max-w-[1440px] flex justify-between items-center mx-auto">
            <div className="flex gap-8">
              <div className="h-full flex items-center gap-4 text-purple-800">
                <FaBriefcase className="w-8 h-8 " />
                <span className="text-xl font-bold">Career Coach</span>
              </div>
              <div className="h-full">
                <div className="flex">
                <div className="w-10 h-10 flex items-center mx-3">
                    <FaSearch className="" />
                  </div>
                  <Select className="min-w-[250px]">
                    <SelectTrigger>
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
                  
                  <Input
                    id="search"
                    type="text"
                    placeholder="Job title, keyword, company"
                    className="min-w-[400px]"
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
