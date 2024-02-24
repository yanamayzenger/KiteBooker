import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import BookingPage from "./pages/BookingPage/BookingPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/KiteBooking" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
