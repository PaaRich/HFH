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

       {/* outlet */}
            <div className="border-l-2 md:w-[95%]">
              <Outlet />
            </div>
         
     
      </div>
    </main>
  );
};

export default Layout;
