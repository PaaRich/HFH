import { useContext } from "react";
import { Context } from "../Context/Context";

const Schedule = () => {
  const { setSchedule } = useContext(Context);
  return (
    <div className="flex items-center justify-center w-full">
      <button onClick={() => setSchedule(false)} className="border-2 ">
        Toggle Schedule
      </button>
    </div>
  );
};

export default Schedule;
