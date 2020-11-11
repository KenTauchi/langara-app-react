import React from "react";
import { Link } from "react-router-dom";
import StudentWork from "../../component/student-work/StudentWork";
import AlumniSuccess from "../../component/alumni-success/AlumniSuccess";
// import Movie from "../../component/movie/Movie";

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
            <div class="intro-desc">
              <h1>{cf.acf.title_intro}</h1>
              <p>{cf.acf.description_intro}</p>
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
            {/*<Movie url={cf.acf.intro_movie} />*/}
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
            className="top-apply bcg-img"
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
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
