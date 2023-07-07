import React, { useState } from "react";

const DatePicker = () => {
  const [data, setData] = useState();

  return (
    <div className="datePicker">
      <input type="date" onChange={(e) => setData(e.target.value)}></input>
    </div>
  );
};

export default DatePicker;
