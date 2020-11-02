import React from "react";
import useFetch from "../../../component/useFetch";

import "./Instructor.scss";

export default function Instructors() {
  const instructors = useFetch(
    "http://localhost:8888/langara_web/wp-json/wp/v2/instructor?per_page=100"
  );
  const jasonInfo = useFetch(
    "http://localhost:8888/langara_web/wp-json/wp/v2/instructor?slug=jason-madar"
  );
  const jesicaInfo = useFetch(
    "http://localhost:8888/langara_web/wp-json/wp/v2/instructor?slug=jesica-ortega-nava"
  );

  const orderIns = instructors.sort((a, b) => {
    if (a.slug > b.slug) {
      return 1;
    }
    if (b.slug > a.slug) {
      return -1;
    }
    return 0;
  });

  return orderIns !== null && jasonInfo !== null && jesicaInfo !== null ? (
    <div>
      {jasonInfo.map((jason) => (
        <div className="instructor">
          <div>
            <img src={jason.acf.instructor_profile_image} />
          </div>
          <h3>{jason.acf.instructor_name}</h3>
          <p>{jason.acf.instructor_title}</p>
          <p>{jason.acf.instructor_email}</p>
        </div>
      ))}
      {jesicaInfo.map((jesica) => (
        <div className="instructor">
          <div>
            <img src={jesica.acf.instructor_profile_image} />
          </div>
          <h3>{jesica.acf.instructor_name}</h3>
          <p>{jesica.acf.instructor_title}</p>
          <p>{jesica.acf.instructor_email}</p>
        </div>
      ))}

      {orderIns.map((instructor) =>
        instructor.slug === "jason-madar" ||
        instructor.slug === "jesica-ortega-nava" ? null : (
          <div className="instructor">
            <div>
              <img src={instructor.acf.instructor_profile_image} />
            </div>
            <h3>{instructor.acf.instructor_name}</h3>
            <p>{instructor.acf.instructor_title}</p>
            <p>{instructor.acf.instructor_email}</p>
          </div>
        )
      )}
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
