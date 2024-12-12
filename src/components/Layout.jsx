import { useContext } from "react";
import SideBar from "./SideBar";
//import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Context } from "../Context/Context";
import { AiOutlineCaretRight } from "react-icons/ai";

const Layout = () => {
  const { open, setIsOpen } = useContext(Context);
  return (
    <main className="h-dvh">
      <div className="md:flex">
        {/* sidebar */}
        <div
          className={`c-sidebar md:w-[5%] ${
            open ? "left-0" : "-left-[5%]"
          } duration-150 border-r-[1px] fixed z-50 top-0`}
        >
          <SideBar />
          <span
            className={`${
              open
                ? "hover:scale-110 duration-150"
                : "hover:scale-110 duration-200"
            } absolute -right-6 top-1/2 cursor-pointer `}
            onClick={() => setIsOpen(!open)}
          >
            <AiOutlineCaretRight size={30} color="#3abdea" />
          </span>
        </div>

        {/* outlet */}
        <div
          className={`${
            open ? "md:w-[95%]" : "md:w-full"
          } duration-200 fixed right-0 top-0 z-10`}
        >
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
