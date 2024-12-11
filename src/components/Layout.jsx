import SideBar from "./SideBar";
import Calender from "./Calender";
import HeroHeader from "./HeroHeader";

const Layout = () => {
  return (
    <main>
      <div className="c-hero-container lg:flex h-dvh">
        {/* sidebar */}
        <div className="c-sidebar lg:basis-1/12">
          <SideBar />
        </div>

        {/* homePage */}
        <div className="c-homepage-container lg:basis-11/12 lg:flex">
          <div className="c-hero lg:basis-4/5">
            <HeroHeader />
          </div>
          <div className="c-calender lg:basis-1/5">
            <Calender />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
