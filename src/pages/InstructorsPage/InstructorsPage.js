import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InstructorFullList from "../../components/InstructorsFullList/InstructorsFullList";
import "./InstructorsPage.scss";

const InstructorsPage = () => (
  <div className="instructors-page">
    <div className="section">
      <Header />
      <h2>Meet your Instructors</h2>
      <InstructorFullList />
      <Footer />
    </div>
  </div>
);

export default InstructorsPage;
