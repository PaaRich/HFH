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
    <main className="h-dvh ">
      <div className="md:flex">
        {/* sidebar */}
        <div
          // ref={SidebarRef}
          className={`c-sidebar md:w-[6%] ${
            open ? "left-0" : "-left-[6%]"
          } duration-300  fixed z-50 top-0 bg-[#000000f1]`}
        >
          <SideBar />
          <span
            className={`${
              open ? "hover:-translate-x-1" : "hover:translate-x-1"
            } absolute -right-5 top-1/2 duration-300 cursor-pointer bg-black rounded-e-full`}
            onClick={() => setIsOpen(!open)}
          >
            <AiOutlineCaretRight size={30} color="#3abdea" />
          </span>
        </div>

        {/* outlet */}
        <div
          className={`${
            open ? "md:w-[94%]" : "md:w-full"
          } duration-300 fixed right-0 top-0 z-10 h-dvh overflow-auto`}
        >
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
