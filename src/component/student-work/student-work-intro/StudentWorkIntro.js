import React from "react";
import { Link } from "react-router-dom";
import "./_StudentWorkIntro.scss";

export default function StudentWorkIntro(props) {
  const pStyle = {
    marginBottom: "30px",
  };
  return (
    <div className="student-intro">
      <Link
        className="intro-title"
        to={{
          pathname: `/project/${props.slug}`,
        }}
      >
        <h2>{props.acf.name_of_the_project}</h2>
      </Link>
      <p
        className="intro-desc"
        style={pStyle}
        dangerouslySetInnerHTML={{
          __html: props.acf.app_description,
        }}
      ></p>
      <Link
        to={{
          pathname: `/project/${props.slug}`,
        }}
      >
        <img src={props.acf.app_picture} alt="app-list-img" />
      </Link>
    </div>
  );
}
