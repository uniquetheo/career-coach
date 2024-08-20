import { FaBriefcase, FaBuilding, FaFile, FaUsers } from "react-icons/fa";

const statsCards = [
  {
    name: "Live Jobs",
    number: "23459",
    icon: <FaBriefcase className="w-full h-full p-4" />,
  },
  {
    name: "Companies",
    number: "23459",
    icon: <FaBuilding className="w-full h-full p-4" />,
  },
  {
    name: "Candidates",
    number: "23459",
    icon: <FaUsers className="w-full h-full p-4" />,
  },
  {
    name: "New Jobs",
    number: "23459",
    icon: <FaFile className="w-full h-full p-4" />,
  },
];

const HeroCards = () => {
  return (
    <div className="flex w-full gap-6">
      {statsCards.map((item, id) => {
        return (
          <div
            key={id}
            className="w-full flex gap-4 border bg-white rounded shadow-sm p-4"
          >
            <div className="h-[72px] min-w-[72px] bg-[#0A65CC]/10 hover:bg-[#0A65CC] rounded border">
              {item.icon}
            </div>
            <div className="w-full h-full flex flex-col justify-center ">
              <div>{parseInt(item.number).toLocaleString()}</div>
              <div className="text-muted-foreground">{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroCards;
