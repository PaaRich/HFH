import { useContext } from "react";
import { Context } from "../Context/Context";

const Calendar = () => {
  const { setCalendar } = useContext(Context);
  return (
    <div className="flex items-center justify-center w-full">
      <button onClick={() => setCalendar(false)} className="border-2 ">
        Toggle Calendar
      </button>
    </div>
  );
};

export default Calendar;
