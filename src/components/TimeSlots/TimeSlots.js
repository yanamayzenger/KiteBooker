import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./Timeslots.scss";

const TimeSlots = ({ date, onSelectTimeSlot }) => {
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/time-slots?date=${date}`)
      .then((response) => response.json())
      .then((data) => setTimeSlots(data))
      .catch((error) => console.error("Error fetching time slots:", error));
  }, [date]);

  return (
    <div className="time-slots-wrapper">
      <Button title="Select Time Slot" />
      <div className="time-slots-container">
        <h2 className="time-slots-heading">Available Time Slots for {date}</h2>
        <ul className="time-slot-list">
          {timeSlots.map((slot, index) => (
            <li key={index} onClick={() => onSelectTimeSlot(slot)}>
              {slot}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeSlots;
