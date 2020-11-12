import React from "react";
import { Link } from "react-router-dom";
// import StudentWork from "../../component/student-work/StudentWork";
import AlumniSuccess from "../../component/alumni-success/AlumniSuccess";
import StudentWorkTopIntro from "../../component/student-work/student-work-top-intro/StudentWorkTopIntro";

import useFetch from "../../component/useFetch";

import "./_AboutUsMain.scss";

export default function TopPage() {
  const cf = useFetch(
    "http://localhost:8888/langara_web/wp-json/acf/v3/pages/370"
  );

  return (
    <div>
      {cf !== null ? (
        <div className="about-us-main-page">
          <div
            class="aboutus-main-top"
            style={{ background: `url(${cf.acf.top_image})` }}
          >
            <div className="top-desc">
              <h1>{cf.acf.top_title}</h1>
              <p>{cf.acf.top_title_description}</p>
            </div>
          </div>

          <div class="program-cur">
            <h1>{cf.acf.program_curriculum}</h1>
            <p>{cf.acf.program_curriculum_description_1}</p>
            <p>{cf.acf.program_curriculum_description_2}</p>
            <p>{cf.acf.program_curriculum_description_3}</p>

            <a href={cf.acf.full_program_link}>{cf.acf.full_program_text}</a>
          </div>

          <StudentWorkTopIntro {...cf} />

          <div class="discover">
            <h1>{cf.acf.discover_title}</h1>
            <p>{cf.acf.discover_description}</p>
            <ul>
              <li>{cf.acf.discover_list_1}</li>
              <li>{cf.acf.discovery_list_2}</li>
              <li>{cf.acf.discovery_list_3}</li>
            </ul>
            <div className="discover-img">
              <img src={cf.acf.discover_image} alt="discover-pic" />
            </div>
          </div>

          <div class="hear-alumni">
            <h1>{cf.acf.alumni_title}</h1>
            <p>{cf.acf.alumni_description}</p>
            <div
              className="hear-alumni-img"
              style={{ background: `url(${cf.acf.alumni_about_us_image})` }}
            ></div>
            <Link
              to={{
                pathname: "/alumnis/",
              }}
            >
              Learn More
            </Link>
          </div>

          <AlumniSuccess />

          <div class="join-wmdd">
            <h1>{cf.acf.join_now_title}</h1>
            <p>{cf.acf.join_now_description}</p>

            <a className="apply-now" href={cf.acf.apply_now_link}>
              {cf.acf.apply_now_text}
            </a>

            <a className="admission" href={cf.acf.see_requirement_link}>
              {cf.acf.see_requirement_text}
            </a>
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
