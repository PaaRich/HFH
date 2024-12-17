import { Context } from "./Context";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AppContext = ({ children }) => {
  const [open, setIsOpen] = useState(false);
  const [meeting, setMeeting] = useState(true);
  const [calendar, setCalendar] = useState(true);
  const [notification, setNotification] = useState(true);
  return (
    <Context.Provider
      value={{
        open,
        setIsOpen,
        meeting,
        setMeeting,
        calendar,
        setCalendar,
        notification,
        setNotification,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
