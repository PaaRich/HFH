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
  const { addEvent, myEventList, setPosition } = useContext(Context);
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

  const handleEventClick = (event, e) => {
    setSelectedEvent(event); // Set the selected event to show details

    // Get the position of the clicked event
    const eventRect = e.target.getBoundingClientRect();
    const offsetTop = eventRect.top + window.scrollY; // Get the top position of the event
    const offsetLeft = eventRect.left + window.scrollX; // Get the left position of the event
    setPosition({
      top: offsetTop + 40, // Add some offset to move the detail view below the event
      left: offsetLeft + 30, // Add some offset to move the detail view to the right of the event
    });
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (selectedEvent) {
  //       handleClose();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [selectedEvent]);
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
        onDropFromOutside={handleDropFromOutside}
        popup
        onSelectEvent={handleEventClick}
      />
      {selectedEvent && (
        <CustomEventDetails event={selectedEvent} onClose={handleClose} />
      )}
    </div>
  );
};

export default MyCalendar;
