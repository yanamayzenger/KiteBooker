import React, { useState, useEffect } from "react";
import InstructorProfile from "../InstructorsProfile/InstructorsProfile";
import Button from "../Button/Button";
import "./InstructorList.scss";
import { instructorImages } from "../InstructorImages/InstructorImages";

function InstructorList({ selectedDate, selectedTimeSlot }) {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    if (!selectedDate || !selectedTimeSlot) return;

    const formattedDate = selectedDate.toISOString().split("T")[0];
    const { start, end } = selectedTimeSlot;

    const url = `http://localhost:8080/api/availability/available-instructors?date=${formattedDate}&start=${start}&end=${end}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInstructors(
          data.map((instructor) => ({
            ...instructor,
            image: instructorImages[instructor.name] || "defaultImagePath",
          }))
        );
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [selectedDate, selectedTimeSlot]);

  return (
    <div className="instructors-list-container">
      <div className="instructors-list-title">
        <Button title="Instructors" />
      </div>
      <div className="instructors-list-profiles">
        {instructors.map((instructor) => (
          <InstructorProfile key={instructor.id} {...instructor} />
        ))}
      </div>
    </div>
  );
}

export default InstructorList;
