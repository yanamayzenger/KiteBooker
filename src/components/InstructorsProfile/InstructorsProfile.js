import React from "react";
import Button from "../Button/Button";
import "./InstructorsProfile.scss";
function InstructorProfile({ name, location, price, rating, image }) {
  return (
    <div className="instructor-card">
      <img
        src={image}
        alt={`Profile of ${name}`}
        className="instructor-image"
      />
      <h2>{name}</h2>
      <p>Location: {location}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <div className="instructor-book-button">
        <Button title="Book your Lesson" />
      </div>
    </div>
  );
}

export default InstructorProfile;
