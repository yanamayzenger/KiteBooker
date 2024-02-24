import React, { useState } from "react";
import Button from "../Button/Button";
import "./Timeslots.scss";

const TimeSlots = ({ onSelectTimeSlot }) => {
  const timeSlots = ["9 am- 11 am", "11 am- 1 pm", "1 pm- 3 pm", "3 pm- 5 pm"];
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const handleTimeSlotSelect = (timeSlot) => {
    console.log(`Time Slot selected: ${timeSlot}`);
    setSelectedTimeSlot(timeSlot);
    onSelectTimeSlot(timeSlot);
  };

  return (
    <div className="time-slots-container">
      <div className="time-slots-title">
        <Button title="Select Time Slot" />
      </div>
      <div className="time-slots-buttons">
        {timeSlots.map((timeSlot, index) => (
          <div key={index} className={`time-slot-${index + 1}`}>
            <button
              onClick={() => handleTimeSlotSelect(timeSlot)}
              className={timeSlot === selectedTimeSlot ? "selected" : ""}
            >
              {timeSlot}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;
