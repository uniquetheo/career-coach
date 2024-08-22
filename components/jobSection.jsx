import Image from "next/image";
import React from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { jobs } from "@/data/dummy";
import { timeOptions } from "@/data/dummy";



const JobSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-6 px-12">
      <div className="flex w-full">
        <div className="grid grid-cols-3 w-full gap-6">
          {jobs.slice(0, 14).map((job, idx) => {
            return (
              <div key={idx} className="flex flex-col border rounded p-6">
                <div className="relative">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <div className="flex gap-3 items-center">
                    <div className="p-2 bg-green-500/30 text-sm rounded">
                      <span>
                        {timeOptions[job.time - 1].toLocaleUpperCase()}
                      </span>
                    </div>
                    <div className="">
                      <span>{`Salary $${job.salaryRange[0]} - $${job.salaryRange[1]}`}</span>
                    </div>
                  </div>
                  <div className="flex w-full h-full items-center gap-4 pb-6 pt-3">
                    <div className="img h-20 w-20 relative  bg-[#0A65CC]/20 rounded">
                      <Image
                        src={job.companyImg}
                        alt={job.companyName}
                        className="w-full h-full object-contain mix-blend-color-burn"
                        unoptimized
                        fill
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">
                        {job.companyName}
                      </span>
                      <span>{job.companyLocation}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 text-muted-foreground">
                    <FaRegBookmark />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobSection;
