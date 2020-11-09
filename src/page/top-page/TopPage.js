import React from "react";
import { Link } from "react-router-dom";
import StudentWork from "../../component/student-work/StudentWork";
import AlumniSuccess from "../../component/alumni-success/AlumniSuccess";

import useFetch from "../../component/useFetch";
import background from "../../assets/hp_bg.png";

import "./_TopPage.scss";

export default function TopPage() {
  const cf = useFetch(
    "http://localhost:8888/langara_web/wp-json/acf/v3/pages/356"
  );

  // const style = {
  //   background: url({cf.acf.apply_now_image}),
  // }

  return (
    <div>
      {cf !== null ? (
        <div className="front-page">
          <div className="intro">
            <div className="front-top-image">
              <img src={cf.acf.front_top_image} alt="front-top" />
            </div>

            <div class="intro-desc">
              <h1>{cf.acf.title_intro}</h1>
              <p>{cf.acf.description_intro}</p>
            </div>
            <button>
              <a href={cf.acf.link_top}>{cf.acf.link_text_front_top}</a>
            </button>
          </div>

          <img src={background} alt="hp-bg" />
          <div className="intro-movie">
            <iframe src={cf.acf.intro_movie} title="intro-movie"></iframe>
          </div>

          <div className="studentwork-intro">
            <h1>{cf.acf.student_work_front_title}</h1>
            <p>{cf.acf.student_work_front_description}</p>
            <StudentWork />
            <Link
              to={{
                pathname: "/projects",
              }}
            >
              See More
            </Link>
          </div>

          <AlumniSuccess />

          <div
            className="top-apply"
            style={{ background: `url(${cf.acf.apply_now_image})` }}
          >
            <div className="overlay"></div>
            <h1>{cf.acf.bottom_message_title}</h1>
            <p>{cf.acf.bottom_message}</p>
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
    </div>
  );
}
