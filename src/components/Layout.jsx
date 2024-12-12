import SideBar from "./SideBar";
//import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="h-dvh">
      <div className="md:flex">
        {/* sidebar */}
        <div className="c-sidebar md:w-[5%]">
          <SideBar />
        </div>

        {/* main */}
        <div className="md:w-full border-l-2">
          <div className="md:flex flex-col ">
            {/* navbar */}
            {/* <div>
              <Navbar />
            </div> */}

            {/* outlet */}
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
