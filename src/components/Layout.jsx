import { useContext } from "react";
import SideBar from "./SideBar";
//import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Context } from "../Context/Context";
import { AiOutlineCaretRight } from "react-icons/ai";

const Layout = () => {
  const { open, setIsOpen } = useContext(Context);
  // const SidebarRef = useRef(null);

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (!SidebarRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [SidebarRef, setIsOpen]);

  return (
    <main className="h-dvh">
      <div className="md:flex">
        {/* sidebar */}
        <div
          className={`c-sidebar md:w-[5%] ${
            open ? "left-0" : "-left-[5%]"
          } duration-150  fixed z-50 top-0 bg-[#000000f1]`}
        >
          <SideBar />
          <span
            className={`${
              open
                ? "hover:-translate-x-1 duration-150"
                : "hover:translate-x-1 duration-200"
            } absolute -right-5 top-1/2 cursor-pointer bg-black rounded-e-full`}
            onClick={() => setIsOpen(!open)}
          >
            <AiOutlineCaretRight size={30} color="#3abdea" />
          </span>
        </div>

        {/* outlet */}
        <div
          className={`${
            open ? "md:w-[95%]" : "md:w-full"
          } duration-150 fixed right-0 top-0 z-10`}
        >
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
