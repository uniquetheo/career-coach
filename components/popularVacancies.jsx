import { popularVacancies } from "@/data/dummy";

const PopularVacancies = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-12 px-12">
      <div className="mb-8">
        <h3 className="text-3xl text-center font-semibold leading-none tracking-tight">Most Popular Vacancies</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {popularVacancies.slice(0, 12).map((item, id) => {
          return (
            <div key={id} className="">
              <h4 className="text-black/70 font-semibold">{item.name}</h4>
              <span className="text-muted-foreground text-sm">
                {item.numberOpen} positions open
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularVacancies;
