import { Context } from "./Context";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AppContext = ({ children }) => {
  const [open, setIsOpen] = useState(false);
  // const [meeting, setMeeting] = useState(true);
  const [schedule, setSchedule] = useState(true);
  const [event, setEvent] = useState(true);
  return (
    <Context.Provider
      value={{
        open,
        setIsOpen,
        //meeting,
        //setMeeting,
        schedule,
        setSchedule,
        event,
        setEvent,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
