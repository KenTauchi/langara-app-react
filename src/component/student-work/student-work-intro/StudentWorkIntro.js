import React from "react";
import { Link } from "react-router-dom";

export default function StudentWorkIntro(props) {
  return (
    <div>
      <h2>{props.acf.name_of_the_project}</h2>
      <p>{props.acf.app_description}</p>
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
