const menuItems = [
  { name: "Home", slug: "home" },
  { name: "Find Jobs", slug: "find-jobs" },
  { name: "Employers", slug: "employers" },
  { name: "Candidates", slug: "candidates" },
  { name: "Pricing Plans", slug: "pricing-plans" },
  { name: "Customer Supports", slug: "customer-supports" },
];

const NavMenu = () => {
  return (
    <div className="flex gap-6 h-full items-center">
      {menuItems.map((item, id) => (
        <ul key={id} className="hover:text-[#0A65CC] cursor-pointer">{item.name}</ul>
      ))}
    </div>
  );
};

export default NavMenu;
