import { Context } from "./Context";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AppContext = ({ children }) => {
  const [open, setIsOpen] = useState(false);
  // const [meeting, setMeeting] = useState(true);
  const [schedule, setSchedule] = useState(true);
  const [event, setEvent] = useState(true);
  const [addEvent, setAddEvent] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [myEventList, setMyEventList] = useState([
    {
      title: "Team Meeting",
      start: new Date(2024, 11, 20, 10, 0), // December 20, 2024, 10:00 AM
      end: new Date(2024, 11, 20, 11, 30), // December 20, 2024, 11:30 AM
      allDay: false,
    },
    {
      title: "Project Development",
      start: new Date(2024, 11, 18, 10, 0), // December 20, 2024, 10:00 AM
      end: new Date(2024, 11, 18, 11, 30), // December 20, 2024, 11:30 AM
      allDay: false,
    },
    {
      title: "Lunch Break",
      start: new Date(2024, 11, 20, 13, 0), // December 20, 2024, 1:00 PM
      end: new Date(2024, 11, 20, 14, 0), // December 20, 2024, 2:00 PM
      allDay: false,
    },
    {
      title: "Annual Company Party",
      start: new Date(2024, 11, 22, 18, 0), // December 22, 2024, 6:00 PM
      end: new Date(2024, 11, 22, 23, 0), // December 22, 2024, 11:00 PM
      allDay: false,
    },
    {
      title: "Christmas Holiday",
      start: new Date(2024, 11, 25), // December 25, 2024
      end: new Date(2024, 11, 26), // December 26, 2024
      allDay: true,
    },
    {
      title: "Project Deadline",
      start: new Date(2024, 11, 30, 17, 0), // December 30, 2024, 5:00 PM
      end: new Date(2024, 11, 30, 23, 59), // December 30, 2024, 11:59 PM
      allDay: false,
    },
    {
      title: "New Year's Day",
      start: new Date(2025, 0, 1), // January 1, 2025
      end: new Date(2025, 0, 1), // January 1, 2025
      allDay: true,
    },
  ]);

  return (
    <Context.Provider
      value={{
        open,
        setIsOpen,
        schedule,
        setSchedule,
        event,
        setEvent,
        addEvent,
        setAddEvent,
        myEventList,
        setMyEventList,
        position,
        setPosition,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
