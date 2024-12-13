import { LuBookMarked } from "react-icons/lu";
import { FaRadiation } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { SiLibreofficewriter } from "react-icons/si";
import { Link } from "react-router-dom";

const HeroHeader = () => {
  return (
    <div className="h-dvh w-full overflow-hidden">
      <div className="c-first-hero flex justify-center items-center h-full">
        <div className="w-[50%] h-fit flex items-center justify-evenly">
          <Link
            to="lhims"
            className="flex flex-col items-center cursor-pointer hover:bg-[#0a0c0ca5] p-2 rounded-md duration-200"
          >
            <SiLibreofficewriter size={30} className="mb-2" color="#3abdea" />
            <span className="text-white  text-xl tracking-widest">LHIMS</span>
          </Link>
          <Link
            to="cps"
            className="flex flex-col items-center cursor-pointer hover:bg-[#0a0c0ca5] py-2 px-4 rounded-md duration-200"
          >
            <TiShoppingCart size={30} className="mb-2" color="#3abdea" />
            <span className="text-white  text-xl tracking-widest">CPS</span>
          </Link>
          <Link
            to="claim-it"
            className="flex flex-col items-center cursor-pointer hover:bg-[#0a0c0ca5] p-2 rounded-md duration-200"
          >
            <LuBookMarked size={30} className="mb-2" color="#3abdea" />
            <span className="text-white text-xl tracking-widest">CLAIM-IT</span>
          </Link>
          <Link
            to="x-ray"
            className="flex flex-col items-center cursor-pointer hover:bg-[#0a0c0ca5] p-2 rounded-md duration-200"
          >
            <FaRadiation size={30} className="mb-2" color="#3abdea" />
            <span className="text-white text-xl tracking-widest">X-RAY</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
