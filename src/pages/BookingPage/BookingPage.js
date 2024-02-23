import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CustomCalendar from "../../components/Calendar/Calendar";
import LessonTimeAvailability from "../../components/TimeSlots/TimeSlots";
import WeatherWidget from "../../components/Weather/Weather";
import InstructorsProfile from "../../components/InstructorList/InstructorList";
import "./BookingPage.scss";

const BookingPage = () => (
  <div className="booking-page">
    <Header />
    <div className="booking-content">
      <div className="left-column">
        <div className="calendar-and-slots">
          <CustomCalendar />
          <LessonTimeAvailability />
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

export default BookingPage;
