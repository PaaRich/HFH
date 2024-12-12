import { useState, useCallback } from "react";
import { Calendar } from "@natscale/react-calendar";

const Calender = () => {
  const [value, setValue] = useState();

  const onChange = useCallback(
    (value) => {
      setValue(value);
    },
    [setValue]
  );

  return (
    <div className="w-full">
      <Calendar value={value} onChange={onChange} useDarkMode />
    </div>
  );
};

export default Calender;
