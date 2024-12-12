import { Context } from "./Context";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AppContext = ({ children }) => {
  const [open, setIsOpen] = useState(true);
  return (
    <Context.Provider value={{ open, setIsOpen }}>{children}</Context.Provider>
  );
};

export default AppContext;
