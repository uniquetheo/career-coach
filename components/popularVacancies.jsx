const popularVacancies = [
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Anaestician", numberOpen: "24336" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Designer", numberOpen: "14356" },
];

const PopularVacancies = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-12">
      <div className="mb-8">
        <h3 className="text-2xl">Most Popular Vacancies</h3>
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
