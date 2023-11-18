import Image from "next/image";
const LeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50  ">
      <Image
        className="w-auto"
        src="/left-img.png"
        alt=""
        width={400}
        height={400}
        priority
      />
    </div>
  );
};

export default LeftImg;
