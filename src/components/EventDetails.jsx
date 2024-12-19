import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { LuClock2 } from "react-icons/lu";
import { LuClock7 } from "react-icons/lu";
import { TiArrowSortedUp } from "react-icons/ti";
import { useContext } from "react";
import { Context } from "../Context/Context";

// eslint-disable-next-line react/prop-types
const CustomEventDetails = ({ event, onClose }) => {
  const { position } = useContext(Context);

  return (
    <div
      className="fixed bg-black bg-opacity-50 flex justify-center items-center z-50 shadow-lg"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <div className="bg-white">
        <div className="flex items-center justify-around bg-blue-400 p-2">
          {/* eslint-disable-next-line react/prop-types */}
          <h2 className="text-xl font-bold">{event.title}</h2>
          <FaEdit size={24} color="blue" className="cursor-pointer mx-1" />
          <MdDeleteForever
            size={24}
            color="red"
            className="cursor-pointer mx-1"
          />
          <spa className="cursor-pointer p-[1px] bg-[#f5f5f57e] rounded-lg">
            <IoIosClose onClick={onClose} size={24} />
          </spa>
        </div>
        <div className="p-3">
          <div className="flex items-center text-lg mb-2">
            <LuClock2 className="mr-2" color="green" size={24} />
            <strong>Start:</strong>
            {/* eslint-disable-next-line react/prop-types */}
            {event.start.toLocaleString("en-GB", {
              weekday: "short",
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="flex items-center text-lg">
            <LuClock7 className="mr-2" color="red" size={24} />
            <strong>Start:</strong>
            {/* eslint-disable-next-line react/prop-types */}
            {event.end.toLocaleString("en-GB", {
              weekday: "short",
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
      <TiArrowSortedUp
        size={30}
        color="#60a5fa"
        className="absolute -top-5 left-0"
      />
    </div>
  );
};

export default CustomEventDetails;
