import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import InstructorsPage from "./pages/InstructorsPage/InstructorsPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/KiteBooking" element={<BookingPage />} />
          <Route path="/Instructors" element={<InstructorsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
