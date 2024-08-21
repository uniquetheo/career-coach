"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", slug: "/" },
  { name: "Find Jobs", slug: "/find-jobs" },
  { name: "Employers", slug: "/employers" },
  { name: "Candidates", slug: "/candidates" },
  { name: "Pricing Plans", slug: "/pricing-plans" },
  { name: "Customer Supports", slug: "/support" },
];

const NavMenu = () => {
  const pathname = usePathname()
  return (
    <div className="flex gap-6 h-full items-center">
      {menuItems.map((item, id) => (
        <Link
          href={`${item.slug}`}
          key={id}
          className={`hover:text-[#0A65CC]/80 h-full flex items-center cursor-pointer ${pathname === item.slug ? "text-[#0A65CC] border-b-2 border-[#0A65CC]" : ""}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
