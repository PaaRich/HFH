import { useContext } from "react";
import { Context } from "../Context/Context";
import MyCalendar from "../components/Calender";
import CreateEvent from "../components/CreateEvent";
import { FiPlus } from "react-icons/fi";

const Schedule = () => {
  const { addEvent, setAddEvent } = useContext(Context);
  return (
    <div className="flex items-center justify-center w-full h-dvh relative">
      <MyCalendar />
      <div className="absolute bottom-5 right-10 cursor-pointer rounded-full p-2 bg-blue-500 hover:bg-blue-600 duration-200 shadow-lg">
        <FiPlus
          size={25}
          color="white"
          onClick={() => setAddEvent(!addEvent)}
        />
      </div>
      {addEvent && (
        // <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <CreateEvent />
        </div>
      )}
    </div>
  );
};

export default Schedule;
