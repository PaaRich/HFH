import { Context } from "./Context";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AppContext = ({ children }) => {
  const [post, setPost] = useState(null);
  const [open, setIsOpen] = useState(false);
  const [displayAddEvent, setDisplayAddEvent] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const [myEventList, setMyEventList] = useState([]);

  return (
    <Context.Provider
      value={{
        post,
        setPost,
        open,
        setIsOpen,
        displayAddEvent,
        setDisplayAddEvent,
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
