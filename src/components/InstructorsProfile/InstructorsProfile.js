import React from "react";
import Button from "../Button/Button";
import "./InstructorsProfile.scss";

function InstructorProfile({
  id,
  name,
  location,
  price,
  rating,
  image,
  onBook,
}) {
  const handleBookClick = () => {
    console.log(`Booking clicked for instructor ID: ${id}`);
    onBook(id);
  };

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
        {/* <Button title="Book your Lesson" onClick={handleBookClick} /> */}
        <button onClick={handleBookClick}>Book your Lesson</button>
      </div>
    </div>
  );
}

export default InstructorProfile;
