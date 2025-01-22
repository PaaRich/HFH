import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import moment from "moment";
import { useState, useContext } from "react";
import { Context } from "../Context/Context";
//import EventDetails from "./EventDetails";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer
const DnDCalendar = withDragAndDrop(Calendar);
import CustomEventDetails from "./EventDetails";

const MyCalendar = () => {
  const { addEvent, myEventList, setEvents } = useContext(Context);

  const today = new Date(); // Current date and time
  const activeEvents = myEventList.filter(
    (event) => new Date(event.end) > today
  );

  //USE THIS TO DISPLAY THE EVENT ALERT
  // if (activeEvents > 0) {
  //   setEvents(true);
  // }
  const handleDropFromOutside = ({ start, end, allDay }) => {
    const newEvent = {
      title: "New External Event",
      start,
      end,
      allDay,
    };
    // eslint-disable-next-line no-undef
    setEvents((prev) => [...prev, newEvent]);
  };

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClose = () => {
    setSelectedEvent(null);
  };

  return (
    <div
      className={`h-full w-full ${
        addEvent && "pointer-events-none opacity-45 "
      }`}
    >
      <DnDCalendar
        defaultView="agenda"
        views={["month", "week", "day", "agenda"]}
        localizer={localizer}
        events={activeEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ width: "100%" }}
        // eslint-disable-next-line no-unused-vars
        draggableAccessor={(events) => true}
        resizable={false}
        onDropFromOutside={handleDropFromOutside}
        popup
        //onSelectEvent={handleEventClick}
      />
      {selectedEvent && (
        <CustomEventDetails event={selectedEvent} onClose={handleClose} />
      )}
    </div>
  );
};

export default MyCalendar;
