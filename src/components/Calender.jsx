import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import moment from "moment";
import { useContext } from "react";
import { Context } from "../Context/Context";
//import EventDetails from "./EventDetails";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer
const DnDCalendar = withDragAndDrop(Calendar);

const MyCalendar = () => {
  const { addEvent, myEventList } = useContext(Context);

  

  

  return (
    <div
      className={`h-full w-full ${
        addEvent && "pointer-events-none opacity-45 "
      }`}
    >
      <DnDCalendar
        defaultView="month"
        views={["month", "week", "day", "agenda"]}
        localizer={localizer}
        events={myEventList}
        startAccessor="start"
        endAccessor="end"
        style={{ width: "100%" }}
        // eslint-disable-next-line no-unused-vars
        draggableAccessor={(events) => true}
        resizable={false}
        popup
      />
    </div>
  );
};

export default MyCalendar;
