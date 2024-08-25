"use client";
import JobContent from "@/components/jobContent";
import PageHeader from "@/components/pageHeader";
import { jobDetails } from "@/data/dummy";
import { usePathname } from "next/navigation";

const JobDetailPage = () => {
  const pathname = usePathname();
  // console.log(pathname);
  // console.log(jobDetails[0].description);
  return (
    <main className="min-h-[calc(100vh-138px)]">
      <section>
        <PageHeader title={"Senior React Developer"} action={`Apply Now`} />
      </section>
      <section>
        <JobContent job={jobDetails[0]} />
      </section>
    </main>
  );
};

export default JobDetailPage;
