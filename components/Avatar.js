import Image from "next/image";
import PropTypes from "prop-types";

const Avatar = ({ src, w, h }) => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        className="translate-z-0 w-full h-full "
        src={src}
        width={w}
        height={h}
        alt=""
      />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
};

export default Avatar;
