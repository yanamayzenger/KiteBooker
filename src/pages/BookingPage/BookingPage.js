import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CustomCalendar from "../../components/Calendar/Calendar";
import TimeSlots from "../../components/TimeSlots/TimeSlots"; // Ensure the import path is correct
import WeatherWidget from "../../components/Weather/Weather";
import InstructorsProfile from "../../components/InstructorList/InstructorList";
import "./BookingPage.scss";

const BookingPage = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const handleSelectDate = (dayOfWeekName) => {
    console.log(`Day selected: ${dayOfWeekName}`);
    setSelectedDay(dayOfWeekName);
  };

  const handleSelectTimeSlot = (timeSlot) => {
    console.log(`Time Slot selected: ${timeSlot}`);
    setSelectedTimeSlot(timeSlot);
    // Add here: send the selected day and time slot to the backend to fetch available instructors
  };

  return (
    <div className="booking-page">
      <Header />
      <div className="booking-content">
        <div className="left-column">
          <div className="calendar-and-slots">
            <CustomCalendar onSelectDate={handleSelectDate} />
            {/* Now including TimeSlots component with the onSelectTimeSlot prop */}
            <TimeSlots onSelectTimeSlot={handleSelectTimeSlot} />
          </div>
          <div className="left-bottom">
            <WeatherWidget />
          </div>
        </div>
        <div className="right-column">
          <InstructorsProfile />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
