import { jobOverviewCard, shareLink } from "@/data/dummy";
import { FaMap } from "react-icons/fa";
import { Button } from "./ui/button";

const JobContent = ({ job }) => {
  return (
    <div className="max-w-[1440px] mx-auto py-12 px-12">
      <div className="grid grid-cols-[1fr_536px] gap-6">
        <div className="flex flex-col gap-6">
          <div className="desc">
            <h3 className="font-bold">Job Description</h3>
            <p>{job.description}</p>
          </div>
          <div className="req flex flex-col ">
            <h3 className="font-bold">Requirements:</h3>
            <div className="flex flex-col pl-10">
              {job.requirements.map((item, idx) => {
                return (
                  <ul key={idx} className="list-disc">
                    <li>{item}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className="des">
            <h3 className="font-bold">Desirables:</h3>
            <div className="flex flex-col pl-10">
              {job.desirables.map((item, idx) => {
                return (
                  <ul key={idx} className="list-disc">
                    <li>{item}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className="ben">
            <h3 className="font-bold">Benefits:</h3>
            <div className="flex flex-col pl-10">
              {job.benefits.map((item, idx) => {
                return (
                  <ul key={idx} className="list-disc">
                    <li>{item}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
        <div className="side-box flex flex-col gap-6 h-full">
          <div className="border rounded-md p-4 grid grid-cols-2">
            <div className="flex flex-col items-center h-full justify-center w-full border-r-2">
              <span className="font-bold">{`Salary (${job.currency.short})`}</span>
              <span className="text-green-500 text-xl">{`${
                job.currency.symbol
              }${Number(job.salaryRange[0]).toLocaleString()} - ${
                job.currency.symbol
              }${Number(job.salaryRange[1]).toLocaleString()}`}</span>
              <span className="text-muted-foreground">Yearly salary</span>
            </div>
            <div className="flex flex-col items-center w-full h-full justify-center">
              <FaMap />
              <span className="font-bold">Job Location</span>
              <span className="text-muted-foreground">{job.location}</span>
            </div>
          </div>
          <div className="border rounded-md">
            <div className="flex flex-col w-full border-b-2">
              <div className="font-bold px-6 mt-4 text-lg">Job Overview</div>
              <div className="grid grid-cols-3 px-4">
                {jobOverviewCard.map((item, idx) => {
                  return (
                    <div key={idx} className="m-2 p-2 flex flex-col">
                      <span className="text-2xl py-2 text-[#0A65CC]">
                        {item.icon}
                      </span>
                      <span className="text-xs text-muted-foreground/90">
                        {item.title.toUpperCase()}
                      </span>
                      <span className="font-bold text-sm">
                        {job.metadata[idx]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col p-6 gap-4">
              <span className="font-bold">Share this job</span>
              <div className="flex gap-3 h-full items-center">
                {shareLink.map((item, idx) => {
                  return (
                    <button key={idx} className="flex gap-2 h-full justify-center items-center bg-[#0A65CC]/30 hover:bg-[#0A65CC]/10 rounded p-2">
                      {/* {item.text} */}
                      {item.icon}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobContent;
