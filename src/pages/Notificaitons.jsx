import { useContext } from "react";
import { Context } from "../Context/Context";

const Notification = () => {
  const { setNotification } = useContext(Context);
  return (
    <div className="flex items-center justify-center w-full">
      <button onClick={() => setNotification(false)} className="border-2 ">
        Notification
      </button>
    </div>
  );
};

export default Notification;
