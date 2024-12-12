import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/WHO_logo-removebg-preview.png";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { FaRadiation } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { Classic } from "@theme-toggles/react";

const SideBar = () => {
  return (
    <div className="md:flex flex-col justify-between items-center h-dvh">
      <div>
        <div className="border-b-[1px] py-1">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="flex flex-col items-center w-full mx-auto py-2">
          <NavLink to="lhims" className=" p-2 rounded-md my-1">
            <BsFillClipboardDataFill size={25} id="right" />
            <Tooltip
              anchorId="right"
              content="Lhims"
              place="right"
              variant="dark"
            />
          </NavLink>

          <NavLink to="cps" className="p-2 rounded-md my-1">
            <TiShoppingCart size={25} id="right2" />
            <Tooltip
              anchorId="right2"
              content="CPS"
              place="right"
              variant="dark"
            />
          </NavLink>

          <NavLink to="x-ray" className="p-2 rounded-md my-1">
            <FaRadiation size={25} id="right3" />
            <Tooltip
              anchorId="right3"
              content="X-ray"
              place="right"
              variant="dark"
            />
          </NavLink>

          <NavLink to="claimit" className="p-2 rounded-md my-1">
            <BsDatabase size={25} id="right4" />
            <Tooltip
              anchorId="right4"
              content="ClaimIT"
              place="right"
              variant="dark"
            />
          </NavLink>
        </div>
      </div>
      <Classic className="mb-2" />
    </div>
  );
};

export default SideBar;
