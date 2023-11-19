import Image from "next/image";
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        className="translate-z-0 w-full h-full "
        src="/image.png"
        width={720}
        height={660}
        alt=""
      />
    </div>
  );
};

export default Avatar;
