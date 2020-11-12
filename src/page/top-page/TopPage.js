import React from "react";
import { Link } from "react-router-dom";
// import StudentWork from "../../component/student-work/StudentWork";
import AlumniSuccess from "../../component/alumni-success/AlumniSuccess";
import StudentWorkTopIntro from "../../component/student-work/student-work-top-intro/StudentWorkTopIntro";

import useFetch from "../../component/useFetch";
import background from "../../assets/hp_bg.png";

import "./_TopPage.scss";

export default function TopPage() {
  const cf = useFetch(
    "http://localhost:8888/langara_web/wp-json/acf/v3/pages/356"
  );

  return (
    <div>
      {cf !== null ? (
        <div className="front-page">
          <div
            className="intro"
            style={{ background: `url(${cf.acf.front_top_image})` }}
          >
            <div className="intro-desc">
              <h1>{cf.acf.title_intro}</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: cf.acf.description_intro,
                }}
              ></p>
            </div>
            <Link className="button" to="/about-us">
              {cf.acf.link_text_front_top}
            </Link>
          </div>

          <div className="intro-movie-wrap">
            <img src={background} alt="hp-bg" />
            <div className="intro-movie">
              <iframe src={cf.acf.intro_movie} title="intro-movie"></iframe>
            </div>
          </div>

          <StudentWorkTopIntro {...cf} />

          <AlumniSuccess />

          <div
            className="top-apply bcg-img"
            style={{ background: `url(${cf.acf.apply_now_image})` }}
          >
            <h1>{cf.acf.bottom_message_title}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: cf.acf.bottom_message,
              }}
            ></p>
            <h2>
              <a href={cf.acf.apply_now_link}>{cf.acf.apply_now_button}</a>
            </h2>
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
