import React from "react";
import { API_URL } from "../../../global_variable";
import useFetch from "../../../component/useFetch";

import "./_Instructor.scss";

export default function Instructors() {
  const instructors = useFetch(
    `${API_URL}/wp-json/wp/v2/instructor?per_page=100`
  );
  const jasonInfo = useFetch(
    `${API_URL}/wp-json/wp/v2/instructor?slug=jason-madar`
  );
  const jesicaInfo = useFetch(
    `${API_URL}/wp-json/wp/v2/instructor?slug=jesica-ortega-nava`
  );

  const orderIns = !instructors
    ? null
    : instructors.sort((a, b) => {
        if (a.title.rendered.split(" ")[1] > b.title.rendered.split(" ")[1]) {
          return 1;
        }
        if (b.title.rendered.split(" ")[1] > a.title.rendered.split(" ")[1]) {
          return -1;
        }
        return 0;
      });

  return orderIns !== null && jasonInfo !== null && jesicaInfo !== null ? (
    <div className="instructor">
      {jasonInfo.map((jason, index) => (
        <div className="instructor-single" key={index}>
          <div className="profile-img">
            <img src={jason.acf.instructor_profile_image} alt="jason-img" />
          </div>
          <div className="profile">
            <h3>{jason.acf.instructor_name}</h3>
            <p>({jason.acf.instructor_title})</p>
            {/*<p>{jason.acf.instructor_email}</p>*/}
          </div>
        </div>
      ))}
      {jesicaInfo.map((jesica, index) => (
        <div className="instructor-single" key={index}>
          <div className="profile-img">
            <img src={jesica.acf.instructor_profile_image} alt="jesica-img" />
          </div>
          <div className="profile">
            <h3>{jesica.acf.instructor_name}</h3>
            <p>({jesica.acf.instructor_title})</p>
            {/*<p>{jesica.acf.instructor_email}</p>*/}
          </div>
        </div>
      ))}

      {orderIns.map((instructor, index) =>
        instructor.slug === "jason-madar" ||
        instructor.slug === "jesica-ortega-nava" ? null : (
          <div className="instructor-single" key={index}>
            <div className="profile-img">
              <img
                src={instructor.acf.instructor_profile_image}
                alt="instructor-img"
              />
            </div>
            <div className="profile">
              <h3>{instructor.acf.instructor_name}</h3>
              <p>({instructor.acf.instructor_title})</p>
              {/*<p>{instructor.acf.instructor_email}</p>*/}
            </div>
          </div>
        )
      )}
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
}
