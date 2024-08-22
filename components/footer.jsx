import {
  FaBriefcase,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerLinks } from "@/data/dummy";


const Footer = () => {
  return (
    <footer className="bg-[#18191C] text-slate-400 w-full">
      <div className="w-full border-b">
        <div className="max-w-[1440px] flex justify-between items-center mx-auto min-h-[260px] px-12">
          <div className="flex flex-col gap-4">
            <div className="h-full flex items-center gap-4">
              <FaBriefcase className="w-8 h-8 " />
              <span className="text-xl font-bold">Career Coach</span>
            </div>
            <span>Call Now: +233-546-845-585</span>
            <span>Haatso, Accra - Ghana</span>
          </div>
          {footerLinks.map((item, id) => {
            return (
              <ul key={id}>
                <h3 className="font-bold">{item.heading}</h3>
                {item.content.map((link, linkId) => (
                  <ul key={linkId}>{link.name}</ul>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
      <div className="max-w-[1440px] flex justify-between items-center mx-auto h-[68px] sm:px-12">
        <div className="">
          <span>@ 2024 Career Coach - Job Portal. All rights Reserved</span>
        </div>
        <div className="flex gap-6 text-xl">
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
