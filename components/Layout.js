import { Sora } from "@next/font/google";
import Nav from "../components/Nav";
import Header from "../components/Header";
import LeftImg from "../components/LeftImg";
import NavMob from "./NavMob";
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} bg-primary/60 font-sora relative`}
    >
      {" "}
      <NavMob />
      <LeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
