import React from "react";
import StudentWork from "../../component/student-work/StudentWork";
import AlumniSuccess from "../../component/alumni-success/AlumniSuccess";
import HeaderNav from "../../component/navigation/header-nav/HeaderNav";
import FooterNav from "../../component/navigation/footer-nav/FooterNav";
import useFetch from "../../component/useFetch";

import "./AboutUsMain.scss";

export default function TopPage() {
  const cf = useFetch(
    "http://localhost:8888/langara_web/wp-json/acf/v3/pages/370"
  );

  return (
    <div>
      <HeaderNav />
      {cf !== null ? (
        <div className="about-us-main-page">
          <div class="aboutus-main-top">
            <div class="aboutus-top-image">
              <img src={cf.acf.top_image} />
            </div>
            <h1>{cf.acf.top_title}</h1>
            <p>{cf.acf.top_title_description}</p>
          </div>

          <div class="program-cur">
            <h1>{cf.acf.program_curriculum}</h1>
            <p>{cf.acf.program_curriculum_description_1}</p>
            <p>{cf.acf.program_curriculum_description_2}</p>
            <p>{cf.acf.program_curriculum_description_3}</p>

            <h2>
              <a href={cf.acf.full_program_link}>{cf.acf.full_program_text}</a>
            </h2>
          </div>

          <div className="studentwork-intro">
            <h1>{cf.acf.student_work_front_title}</h1>
            <p>{cf.acf.student_work_front_description}</p>
            <StudentWork />
            <a href={cf.acf.student_work_main_link}>See More</a>
          </div>

          <div class="discover">
            <h1>{cf.acf.discover_title}</h1>
            <p>{cf.acf.discover_description}</p>
            <ul>
              <li>{cf.acf.discover_list_1}</li>
              <li>{cf.acf.discovery_list_2}</li>
              <li>{cf.acf.discovery_list_3}</li>
            </ul>
            <div>
              <img src="" />
            </div>
          </div>

          <div class="hear-alumni">
            <h1>{cf.acf.alumni_title}</h1>
            <p>{cf.acf.alumni_description}</p>
            <a href="">Learn More</a>
            <div>
              <img src="" alt="Discover Your Perks" />
            </div>
          </div>

          <AlumniSuccess />

          <div class="join-wmdd">
            <h1>{cf.acf.join_now_title}</h1>
            <p>{cf.acf.join_now_description}</p>
            <h2>
              <a href={cf.acf.apply_now_link}>{cf.acf.apply_now_text}</a>
            </h2>
            <h2>
              <a href={cf.acf.see_requirement_link}>
                {cf.acf.see_requirement_text}
              </a>
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
