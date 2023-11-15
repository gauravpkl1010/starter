import React, { useState } from "react";
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from "react-icons/hi2";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import Draggable from "react-draggable";
import Link from "next/link";
import { useRouter } from "next/router";
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  {
    name: "publications",
    path: "/publications",
    icon: <BsFillBookmarkStarFill />,
  },
  { name: "work", path: "/work", icon: <HiViewColumns /> },

  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
const Nav = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <nav className="flex flex-col items-center justify-center p-4 xl:p-8 gap-y-4 fixed bottom-0 mt-auto right-2 top-0 w-16 xl:w-auto xl:h-screen z-40  ">
      <div className="flex flex-col items-center justify-center gap-y-10 px-4 py-5 bg-white/10 backdrop-blur-sm text-xl rounded-full">
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === pathName && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={index}
          >
            <div
              className={`${
                link.path !== pathName && "transform hover:scale-150"
              } transition-transform`}
              title={link.name}
            >
              {link.icon}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
