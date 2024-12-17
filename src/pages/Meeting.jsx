import { useContext } from "react";
import { Context } from "../Context/Context";

const Meeting = () => {
  const { setMeeting } = useContext(Context);
  return (
    <div className="flex items-center justify-center w-full">
      <button onClick={() => setMeeting(false)} className="border-2 ">
        Toggle Meeting
      </button>
    </div>
  );
};

export default Meeting;
