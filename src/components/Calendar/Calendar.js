import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";
import Button from "../Button/Button";
const CustomCalendar = ({ onSelectDate }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar-wrapper">
      <Button title="Calendar" />
      <Calendar
        onChange={(date) => {
          onChange(date);
          onSelectDate(date);
        }}
        value={value}
      />
    </div>
  );
};

export default CustomCalendar;
