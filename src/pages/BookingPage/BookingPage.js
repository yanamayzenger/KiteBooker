import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CustomCalendar from "../../components/Calendar/Calendar";
import TimeSlots from "../../components/TimeSlots/TimeSlots";
import WeatherWidget from "../../components/Weather/Weather";
import InstructorList from "../../components/InstructorList/InstructorList";
import "./BookingPage.scss";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };
  const handleSelectTimeSlot = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };
  return (
    <div className="booking-page">
      <Header />
      <div className="booking-content">
        <div className="left-column">
          <div className="calendar-and-slots">
            <CustomCalendar onSelectDate={handleSelectDate} />
            <TimeSlots onSelectTimeSlot={handleSelectTimeSlot} />
          </div>
          <div className="left-bottom">
            <WeatherWidget />
          </div>
        </div>
        <div className="right-column">
          <InstructorList
            selectedDate={selectedDate}
            selectedTimeSlot={selectedTimeSlot}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
