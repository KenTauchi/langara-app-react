import React from "react";
import { Link } from "react-router-dom";
import StudentWork from "../StudentWork";
import "./_StudentWorkTopIntro.scss";

export default function StudentWorkTopIntro(props) {
  return (
    <div className="studentwork-top-intro">
      <h1>{props.acf.student_work_front_title}</h1>
      <p className="intro-desc">
        The Web and Mobile Design and Development post-degree diploma at Langara
        College (in Vancouver, Canada) is an intensive four-term program that
        prepares students with no previous experience for a career in the
        industry.
      </p>
      <StudentWork />
      <Link to="/projects">See More</Link>
    </div>
  );
}
