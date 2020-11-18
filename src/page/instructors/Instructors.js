import React from "react";
import { API_URL } from "../../global_variable";
import Instructor from "./instructor/Instructor";

import useFetch from "../../component/useFetch";

import "./_Instructors.scss";

export default function Instructors() {
  const cf = useFetch(`${API_URL}/wp-json/acf/v3/pages/383`);

  return (
    <div>
      {cf !== null ? (
        <div className="instructors-page">
          <div className="instructor-top">
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
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
