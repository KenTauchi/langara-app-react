import React, { useEffect, useState } from "react";
import { API_URL } from "../../global_variable";
import { Link } from "react-router-dom";
// import StudentWork from "../../component/student-work/StudentWork";
import AlumniSuccess from "../../component/alumni-success/AlumniSuccess";
import StudentWorkTopIntro from "../../component/student-work/student-work-top-intro/StudentWorkTopIntro";

import useFetch from "../../component/useFetch";
import MobileBanner from "../../assets/about-us-main_mobile.jpg";

import "./_AboutUsMain.scss";

export default function TopPage() {
  const cf = useFetch(`${API_URL}/wp-json/acf/v3/pages/370`);

  const [width, setWidth] = useState(0);
  const updateSize = () => setWidth(window.innerWidth);

  const bcgAboutUsTopImg = () =>
    width > 600 ? `url(${cf.acf.top_image})` : `url(${MobileBanner})`;

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
  }, [width]);

  return (
    <div>
      {cf !== null ? (
        <div className="about-us-main-page">
          <div
            className="aboutus-main-top"
            style={{ background: bcgAboutUsTopImg() }}
          >
            <div className="top-desc">
              <h1>{cf.acf.top_title}</h1>
              <p>{cf.acf.top_title_description}</p>
            </div>
          </div>

          <div className="program-cur">
            <h1>{cf.acf.program_curriculum}</h1>
            <p className="intro-desc">
              {cf.acf.program_curriculum_description_1}
            </p>
            <p className="intro-desc">
              {cf.acf.program_curriculum_description_2}
            </p>
            <p className="intro-desc">
              {" "}
              {cf.acf.program_curriculum_description_3}
            </p>

            <a href={cf.acf.full_program_link}>{cf.acf.full_program_text}</a>
          </div>

          <StudentWorkTopIntro {...cf} />

          <div className="discover">
            <div className="discover-desc">
              <h1>{cf.acf.discover_title}</h1>
              <p className="intro-desc">{cf.acf.discover_description}</p>
              <ul>
                <li>{cf.acf.discover_list_1}</li>
                <li>{cf.acf.discovery_list_2}</li>
                <li>{cf.acf.discovery_list_3}</li>
              </ul>
            </div>
            <div
              className="discover-img"
              style={{ background: `url(${cf.acf.discover_image})` }}
            >
              {/*<img src={cf.acf.discover_image} alt="discover-pic" />*/}
            </div>
          </div>

          <div className="hear-alumni">
            <h1>{cf.acf.alumni_title}</h1>
            <p className="intro-desc">{cf.acf.alumni_description}</p>
            <Link
              className="hear-alumni-img-container"
              to={{
                pathname: "/alumni/",
              }}
            >
              <div
                className="hear-alumni-img"
                style={{ background: `url(${cf.acf.alumni_about_us_image})` }}
              ></div>
            </Link>
            <Link
              className="link-to-alumni"
              to={{
                pathname: "/alumni/",
              }}
            >
              Learn More
            </Link>
          </div>

          <AlumniSuccess />

          <div className="join-wmdd">
            <h1>{cf.acf.join_now_title}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: cf.acf.join_now_description,
              }}
            ></p>

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
