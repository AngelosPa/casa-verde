import React from "react";
import { Link } from "react-router-dom";
import CoursesData from "../courses.json";
import Map from "./Map";

const BalletAndPilates = () => {
  const coursesMenu = CoursesData.map((obj) => {
    const { id, name, link } = obj;
    return (
      <li key={id}>
        <Link to={link}>{name}</Link>
      </li>
    );
  });

  return (
    <div className="home">
      <div className="home-top">
        <div className="roof"></div>
        <h1>Casa Verde</h1>
        <p>Courses</p>
      </div>
      <ul>{coursesMenu}</ul>
      <button>Contact Now!</button>
      <div>Images- not ready</div>
      <Map />
    </div>
  );
};

export default BalletAndPilates;
