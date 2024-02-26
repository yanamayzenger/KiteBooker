import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";
import Button from "../Button/Button";

const CustomCalendar = ({ onSelectDate }) => {
  const [value, onChange] = useState(new Date());

  const handleDateChange = (date) => {
    onChange(date);
    onSelectDate(date);

    const currDate = new Date(date);
    const currDayOfTheWeek = currDate.getDay();
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeekName = dayNames[currDayOfTheWeek];

    fetchTimeSlotsForDay(dayOfWeekName);
  };

  const fetchTimeSlotsForDay = (dayOfWeekName) => {};

  return (
    <div className="calendar-wrapper">
      <Button title="Calendar" />{" "}
      <Calendar onChange={handleDateChange} value={value} />
    </div>
  );
};

export default CustomCalendar;
