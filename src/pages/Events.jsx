import { useContext } from "react";
import { Context } from "../Context/Context";

const Events = () => {
  const { setEvent } = useContext(Context);
  return (
    <div className="flex items-center justify-center w-full">
      <button onClick={() => setEvent(false)} className="border-2 ">
        Events
      </button>
    </div>
  );
};

export default Events;
