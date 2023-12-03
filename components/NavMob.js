import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const navData = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "publications", path: "/publications" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];
const NavMob = () => {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <nav className="md:hidden w-4/5 fixed top-0 right-0 bg-transparent p-4 flex justify-between z-30">
      {navData.map((link, index) => (
        <Link href={link.path} key={index}>
          <div
            className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 ${
              link.path === pathName
                ? "text-accent after:w-[100%] after:transition-all after:duration-300 after:bg-red-500"
                : "after:bg-white"
            }`}
          >
            <span className="text-xs">
              {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
            </span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default NavMob;
