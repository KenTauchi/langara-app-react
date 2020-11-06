import React from "react";
import StudentWork from "../../component/student-work/StudentWork";
import AlumniSuccess from "../../component/alumni-success/AlumniSuccess";
import HeaderNav from "../../component/navigation/header-nav/HeaderNav";
import FooterNav from "../../component/navigation/footer-nav/FooterNav";
import HeaderNavR1 from "../../component/navigation/header-nav/HeaderNavR1";
import useFetch from "../../component/useFetch";

import "./_TopPage.scss";

export default function TopPage() {
  const cf = useFetch(
    "http://localhost:8888/langara_web/wp-json/acf/v3/pages/356"
  );

  return (
    <div>
      <HeaderNav />

      {cf !== null ? (
        <div className="front-page">
          <div className="intro">
            <h1>{cf.acf.title_intro}</h1>
            <p>{cf.acf.description_intro}</p>
            <h2>
              <a href={cf.acf.link_top}>{cf.acf.link_text_front_top}</a>
            </h2>
            <div>
              <img src={cf.acf.intro_movie} />
            </div>
          </div>

          <div className="studentwork-intro">
            <h1>{cf.acf.student_work_front_title}</h1>
            <p>{cf.acf.student_work_front_description}</p>
            <StudentWork />
            <a href={cf.acf.student_work_main_link}>See More</a>
          </div>

          <AlumniSuccess />

          <div className="Top-apply">
            <div class="apply-now-image">
              <img src={cf.acf.apply_now_image} />
            </div>
            <h1>{cf.acf.bottom_message_title}</h1>
            <p>{cf.acf.bottom_message}}</p>
            <h2>
              <a href={cf.acf.apply_now_link}>{cf.acf.apply_now_button}</a>
            </h2>
          </div>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}

      <FooterNav />
    </div>
  );
}
