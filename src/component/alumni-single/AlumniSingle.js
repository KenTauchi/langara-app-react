import React from "react";
import "./_AlumniSingle.scss";

export default function AlumniSingle(props) {
  return (
    <div className="alumna">
      <div className="alumna-desc">
        <h2>{props.acf.alumni_name}</h2>
        <p className="stream">Graduaet of WMDD {props.acf.stream} Stream</p>
        <p>
          ({props.acf.starting_year} - {props.acf.graduation_year})
        </p>
        <p>
          {props.acf.job_position} at {props.acf.company}
        </p>
      </div>
      <div className="alumna-movie">
        <iframe src={props.acf.movie_link} title="alumna-movie"></iframe>
      </div>
    </div>
  );
}
