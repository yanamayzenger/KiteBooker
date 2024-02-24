import React, { useState, useEffect } from "react";
import InstructorProfile from "../InstructorsProfile/InstructorsProfile";
import Button from "../Button/Button";
import "./InstructorList.scss";

function InstructorList() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Corrected fetch call
    fetch(`http://localhost:8080/api/instructors`)
      .then((response) => response.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
