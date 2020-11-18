import React from "react";
import "./_AlumniSingle.scss";

export default function AlumniSingle(props) {
  return (
    <div className="alumna">
      {props.acf.alumni_name === "Andre" ? (
        <p>Coming Soon...</p>
      ) : (
        <div>
          <div className="alumna-desc">
            <h2>{props.acf.alumni_name}</h2>
            <p>
              {props.acf.job_position} at {props.acf.company}
            </p>
            <p className="stream">Graduate of WMDD {props.acf.stream} Stream</p>
            <p className="year">
              ({props.acf.starting_year} - {props.acf.graduation_year})
            </p>
          </div>
          <div className="alumna-movie">
            <iframe src={props.acf.movie_link} title="alumna-movie"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
