import Link from "next/link";
import { RiFacebookLine, RiInstagramLine, RiGithubLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.facebook.com/profile.php?id=100016364044268"}
        className="hover:text-accent hover:scale-150 transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://instagram.com/pkl_gaurav?igshid=OGQ5ZDc2ODk2ZA=="}
        className="hover:text-accent hover:scale-150 transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://github.com/gauravpkl1010"}
        className="hover:text-accent hover:scale-150 transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
