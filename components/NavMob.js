import React from "react";
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from "react-icons/hi2";
import { BsFillBookmarkStarFill } from "react-icons/bs";
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

const NavMob = () => {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-transparent p-4 flex justify-between z-30">
      {navData.map((link, index) => (
        <Link href={link.path} key={index}>
          <div
            className={`${
              link.path === pathName && "text-accent"
            } flex items-center justify-center flex-col group hover:text-accent transition-all duration-300`}
          >
            <div
              className={`${
                link.path !== pathName && "transform hover:scale-150"
              } transition-transform`}
              title={link.name}
            >
              {link.icon}
            </div>
            <span className="text-xs">{link.name}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default NavMob;
