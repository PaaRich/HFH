import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/WHO_logo-removebg-preview.png";
import { IoNotifications, IoHomeSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Classic } from "@theme-toggles/react";

const SideBar = () => {
  return (
    <div className="md:flex flex-col justify-between items-center h-dvh">
      <div>
        <div className="border-b-[1px] border-[#555] py-3">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="flex flex-col items-center w-full mx-auto py-2 text-blue-500">
          <NavLink to="/" className="c-navlink p-2 rounded-md my-1">
            <IoHomeSharp size={25} id="right" />
            <Tooltip
              anchorId="right"
              content="Home"
              place="right"
              variant="dark"
            />
          </NavLink>

          <NavLink to="meeting" className="c-navlink p-2 rounded-md my-1">
            <HiUserGroup size={25} id="right2" />
            <Tooltip
              anchorId="right2"
              content="Meeting"
              place="right"
              variant="dark"
            />
          </NavLink>

          <NavLink to="calendar" className="c-navlink p-2 rounded-md my-1">
            <FaCalendarAlt size={25} id="right3" />
            <Tooltip
              anchorId="right3"
              content="Calendar"
              place="right"
              variant="dark"
            />
          </NavLink>

          <NavLink to="notification" className="c-navlink p-2 rounded-md my-1">
            <IoNotifications size={25} id="right1" />
            <Tooltip
              anchorId="right1"
              content="Notifications"
              place="right"
              variant="dark"
            />
          </NavLink>

          {/* <NavLink to="claimit" className="c-navlink p-2 rounded-md my-1">
            <BsDatabase size={25} id="right4" />
            <Tooltip
              anchorId="right4"
              content="ClaimIT"
              place="right"
              variant="dark"
            />
          </NavLink> */}
        </div>
      </div>
      <Classic className="mb-2" />
    </div>
  );
};

export default SideBar;
