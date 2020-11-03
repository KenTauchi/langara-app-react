import React from "react";
import HeaderNav from "../../component/navigation/header-nav/HeaderNav";
import Instructor from "./instructor/Instructor";
import FooterNav from "../../component/navigation/footer-nav/FooterNav";
import useFetch from "../../component/useFetch";

import "./Instructors.scss";

export default function Instructors() {
  const cf = useFetch(
    "http://localhost:8888/langara_web/wp-json/acf/v3/pages/383"
  );

  const instructors = useFetch(
    "http://localhost:8888/langara_web/wp-json/wp/v2/instructor"
  );

  return;
  <div>
    <HeaderNav />
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

    <FooterNav />
  </div>;
}
