"use client";

import Link from "next/link";

const menuItems = [
  { name: "Home", slug: "" },
  { name: "Find Jobs", slug: "find-jobs" },
  { name: "Employers", slug: "employers" },
  { name: "Candidates", slug: "candidates" },
  { name: "Pricing Plans", slug: "pricing-plans" },
  { name: "Customer Supports", slug: "support" },
];

const NavMenu = () => {
  return (
    <div className="flex gap-6 h-full items-center">
      {menuItems.map((item, id) => (
        <Link
          href={`/${item.slug}`}
          key={id}
          className="hover:text-[#0A65CC] cursor-pointer"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
