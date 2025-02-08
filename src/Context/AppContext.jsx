import { Context } from "./Context";
import { useState,useEffect } from "react";
import client from "../client"

// eslint-disable-next-line react/prop-types
  const AppContext = ({ children }) => {
  const [post, setPost] = useState(null);
  const [open, setIsOpen] = useState(false);
  const [displayAddEvent, setDisplayAddEvent] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [myEventList, setMyEventList] = useState([]);

  useEffect(() => {
    const event = `*[_type == "event"] {
   _id,
    title,
    start,
    end,
    allday
}`;

    // Fetch data using GROQ
      // Function to fetch data
      const fetchEvent = async () => {
        try {
          const response = await client.fetch(event);
          // if (!response) {
          //   throw new Error('Network response was not ok');
          // }
          // const result = await response.json();
          setMyEventList(response);
        } catch (err) {
          console.log(err)
        } finally {
          console.log("fetched")
        }
    }
    fetchEvent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  

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
