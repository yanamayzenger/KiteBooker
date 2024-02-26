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

  const handleBookInstructor = (instructorId) => {
    console.log("Attempting to book instructor with ID:", instructorId);

    const dayOfWeekNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = dayOfWeekNames[selectedDate.getDay()];

    const bookingData = {
      instructorId,
      date: selectedDate.toISOString().split("T")[0],
      startTime: selectedTimeSlot.start,
      endTime: selectedTimeSlot.end,
      dayOfWeek,
    };

    console.log("Booking data:", bookingData);

    fetch("http://localhost:8080/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to book lesson");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Booking success:", data);
        alert(
          "Your booking is confirmed! We are looking forward to seeing you soon!"
        );
      })
      .catch((error) => {
        console.error("Error booking lesson:", error);
        alert("There was an error processing your booking.");
      });
  };

  return (
    <div className="instructors-list-container">
      <div className="instructors-list-title">
        <Button title="Pick day and time to see available Instructors" />
      </div>
      <div className="instructors-list-profiles">
        {instructors.map((instructor) => (
          <InstructorProfile
            key={instructor.id}
            {...instructor}
            onBook={() => handleBookInstructor(instructor.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default InstructorList;
