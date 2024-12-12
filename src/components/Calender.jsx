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
    <div className="h-full overflow-hidden">
      <Calendar value={value} onChange={onChange} useDarkMode size={250} />
    </div>
  );
};

export default Calender;
