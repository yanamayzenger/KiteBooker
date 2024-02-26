import React from "react";
import Button from "../Button/Button";
import "./InstructorCardFull.scss";

function InstructorsCardFull({
  name,
  location,
  email,
  phone,
  price,
  bio,
  rating,
  image,
}) {
  return (
    <div className="instructor-card-full">
      <img
        src={image}
        alt={`Profile of ${name}`}
        className="instructor-image"
      />
      <h2>{name}</h2>
      <p>Location: {location}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Price: ${price}</p>
      <p>Bio: {bio}</p>
      <p>Rating: {rating}</p>
      <div className="instructor-book-button">
        <Button title="Book your Lesson" />
      </div>
    </div>
  );
}

export default InstructorsCardFull;
