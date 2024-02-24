import React from "react";

function InstructorProfile({
  name,
  location,
  email,
  phone,
  price,
  bio,
  rating,
}) {
  return (
    <div className="instructor-card">
      <h2>{name}</h2>
      <p>Location: {location}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Price: ${price}</p>
      <p>Bio: {bio}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default InstructorProfile;
