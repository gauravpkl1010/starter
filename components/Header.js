import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-6 xl:px-0 xl:h-[90px] mt-16 md:mt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-4 lg:py-8">
          <Link href={"/"}>
            <h1 className="text-2xl font-semibold animate-bounce">
              G<span className="text-accent font-extrabold ">P</span>
            </h1>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
