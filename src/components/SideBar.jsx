import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/WHO_logo-removebg-preview.png";
import { IoNotifications, IoHomeSharp, IoSchoolSharp } from "react-icons/io5";
import { BsShieldLockFill } from "react-icons/bs";
//import { HiUserGroup } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Classic } from "@theme-toggles/react";
import { useContext } from "react";
import { Context } from "../Context/Context";

const SideBar = () => {
  const { schedule, event, training, policy } = useContext(Context);

  return (
    <div className="md:flex flex-col justify-between items-center h-dvh">
      <div>
        <div className="border-b-[1px] border-[#555] py-3">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="flex flex-col items-center w-full mx-auto py-2 text-blue-500">
          <NavLink to="/" className="c-navlink p-2 rounded-md my-1" id="right">
            <IoHomeSharp size={32} />
          </NavLink>
          <Tooltip
            className="text-2xl tracking-widest font-semibold z-50"
            anchorId="right"
            content="Home"
            place="right"
            variant="dark"
          />

          <NavLink
            to="training"
            className="c-navlink p-2 rounded-md my-1 relative"
            id="right4"
          >
            <IoSchoolSharp size={32} />

            {training && (
              <span className="bg-red-500 absolute top-2 right-1 rounded-full w-3 h-3"></span>
            )}
          </NavLink>
          <Tooltip
            className="text-2xl tracking-widest font-semibold z-50"
            anchorId="right4"
            content="Training"
            place="right"
            variant="dark"
          />
          <NavLink
            to="schedule"
            className="c-navlink p-2 rounded-md my-1 relative"
            id="right3"
          >
            <FaCalendarAlt size={32} />
            {schedule && (
              <span className="bg-red-500 absolute top-2 right-1 rounded-full w-3 h-3"></span>
            )}
          </NavLink>
          <Tooltip
            className="text-2xl tracking-widest font-semibold z-50"
            anchorId="right3"
            content="Schedules"
            place="right"
            variant="dark"
          />

          <NavLink
            to="events"
            className="c-navlink p-2 rounded-md my-1 relative"
            id="right1"
          >
            <IoNotifications size={32} />

            {event && (
              <span className="bg-red-500 absolute top-2 right-1 rounded-full w-3 h-3"></span>
            )}
          </NavLink>
          <Tooltip
            className="text-2xl tracking-widest font-semibold z-50"
            anchorId="right1"
            content="Posts"
            place="right"
            variant="dark"
          />

          <NavLink
            to="policy"
            className="c-navlink p-2 rounded-md my-1 relative"
            id="right5"
          >
            <BsShieldLockFill size={32} />
            {policy && (
              <span className="bg-red-500 absolute top-2 right-1 rounded-full w-3 h-3"></span>
            )}
          </NavLink>
          <Tooltip
            className="text-2xl tracking-widest font-semibold z-50"
            anchorId="right5"
            content="Terms & Conditions"
            place="right"
            variant="dark"
          />
        </div>
      </div>
      <Classic className="mb-2" />
    </div>
  );
};

export default SideBar;
