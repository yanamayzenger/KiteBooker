import React, { useState, useEffect } from "react";
import InstructorCardFull from "../InstructorCardFull/InstructorCardFull";
import "./InstructorsFullList.scss";
import { instructorImages } from "../InstructorImages/InstructorImages";

function InstructorFullList() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/instructors`)
      .then((response) => response.json())
      .then((data) => {
        setInstructors(
          data.map((instructor) => {
            return {
              ...instructor,
              image: instructorImages[instructor.name],
            };
          })
        );
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="instructors-list-container-full">
      <div className="instructors-list-profiles-full">
        {instructors.map((instructor) => (
          <InstructorCardFull key={instructor.id} {...instructor} />
        ))}
      </div>
    </div>
  );
}

export default InstructorFullList;
