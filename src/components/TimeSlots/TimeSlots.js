import React, { useState } from "react";
import Button from "../Button/Button";
import "./Timeslots.scss";

const TimeSlots = ({ onSelectTimeSlot }) => {
  const timeSlots = [
    { label: "9 am - 11 am", start: "09:00", end: "11:00" },
    { label: "11 am - 1 pm", start: "11:00", end: "13:00" },
    { label: "1 pm - 3 pm", start: "13:00", end: "15:00" },
    { label: "3 pm - 5 pm", start: "15:00", end: "17:00" },
  ];
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleTimeSlotSelect = (slot) => {
    setSelectedTimeSlot(slot);
    onSelectTimeSlot(slot);
  };

  return (
    <div className="time-slots-container">
      <div className="time-slots-title">
        <Button title="Select Time Slot" />
      </div>
      <div className="time-slots-buttons">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            onClick={() => handleTimeSlotSelect(slot)}
            className={
              selectedTimeSlot && slot.start === selectedTimeSlot.start
                ? "selected"
                : ""
            }
          >
            {slot.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;
