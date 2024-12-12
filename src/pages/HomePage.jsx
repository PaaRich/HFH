import HeroHeader from "../components/HeroHeader";
import Calender from "../components/Calender";

const HomePage = () => {
  return (
    <div className="md:flex">
      <div className="md:w-4/5">
        <HeroHeader />
      </div>
      <div className="md:w-1/5">
        <Calender />
      </div>
    </div>
  );
};

export default HomePage;
