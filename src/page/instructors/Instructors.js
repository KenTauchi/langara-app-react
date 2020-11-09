import React from "react";

import Instructor from "./instructor/Instructor";

import useFetch from "../../component/useFetch";

import "./_Instructors.scss";

export default function Instructors() {
  const cf = useFetch(
    "http://localhost:8888/langara_web/wp-json/acf/v3/pages/383"
  );

  return (
    <div>
      {cf !== null ? (
        <div className="instructors-page">
          <div class="instructor-top">
            <h1>{cf.acf.about_us_instructor_title}</h1>
            <p>{cf.acf.about_us_instructor_description_1}</p>
            <p>{cf.acf.about_us_instructor_description_2}</p>
          </div>

          <div className="instructor-list">
            <Instructor />
          </div>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}
