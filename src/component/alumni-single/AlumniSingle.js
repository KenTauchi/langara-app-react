import React from "react";

export default function AlumniSingle(props) {
  return (
    <div className="alumna">
      <div className="alumna-desc">
        <h2>{props.acf.alumni_name}</h2>
        <p className="stream">Graduaet of WMDD {props.acf.stream} Stream</p>
      </div>
      <div className="alumna-movie">
        <iframe src={props.acf.movie_link} title="alumna-movie"></iframe>
      </div>
    </div>
  );
}
