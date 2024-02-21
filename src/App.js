import React, { useState } from "react";
import Calendar from "./components/Calendar/Calendar";

function App() {
  const [date, setDate] = useState(new Date());

  const handleSelectDate = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className="App">
      <h1>KiteBooker: Book Your Kitesurfing Lesson</h1>
      <Calendar onSelectDate={handleSelectDate} />
    </div>
  );
}

export default App;
