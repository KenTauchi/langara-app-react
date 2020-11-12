import React from "react";
import { Link } from "react-router-dom";
import StudentWork from "../StudentWork";
import "./_StudentWorkTopIntro.scss";

export default function StudentWorkTopIntro(props) {
  return (
    <div className="studentwork-top-intro">
      <h1>{props.acf.student_work_front_title}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: props.acf.student_work_front_description,
        }}
      ></p>
      <StudentWork />
      <Link to="/projects">See More</Link>
    </div>
  );
}
