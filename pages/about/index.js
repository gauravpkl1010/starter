// icons
import {
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoFigma,
  BiLogoHtml5,
} from "react-icons/bi";

import Circles from "../../components/Circles";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Avatar from "../../components/Avatar";
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <BiLogoHtml5 key="" />,
          <BiLogoCss3 key="" />,
          <BiLogoJavascript key="" />,
          <BiLogoTypescript key="" />,
          <BiLogoReact key="" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<BiLogoFigma key="" />],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "No Experience",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Secondary Education Examination",
        institute: "Pioneer Secondary School",
        stage: "2074 B.S.",
      },
      {
        title: "+2",
        institute: "National School of Sciences",
        stage: "2074 B.S.-2076 B.S.",
      },
      {
        title: "Bachelor Degree-Computer Engineering",
        institute: "National School of Sciences",
        stage: "2077B.S.-/",
      },
    ],
  },
];
const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/60 py-32 text-center xl:text-left">
      {" "}
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      ></motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <Avatar src="/man-with-globe.png" w={520} h={460} />
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <button
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg- after:transition-all after:duration-300"
                  }cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]  after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-xol gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60  "
                  key={itemIndex}
                >
                  <div>{item.title}</div>
                  <div className="hidden md:flex">:</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
