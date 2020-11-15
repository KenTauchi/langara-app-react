import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import "./_AlumniSuccess.scss";

SwiperCore.use([Pagination, Autoplay]);

// Import Swiper styles

export default function AlumniSuccess() {
  const alumnis = useFetch(
    "http://localhost:8888/langara_web/wp-json/acf/v3/alumni"
  );

  console.log("alumni", alumnis);

  const cf = useFetch(
    "http://localhost:8888/langara_web/wp-json/acf/v3/pages/356"
  );

  return cf !== null && alumnis !== null ? (
    <div className="alumnis-success">
      <h1>{cf.acf.alumni_front_title}</h1>
      <p className="intro-desc">{cf.acf.alumni_front_description}</p>
      <Swiper
        id="main"
        tag="ul"
        // autoplay
        pagination={{ clickable: true }}
        slidesPerView={1}
        paginationstyle={{ bottom: 0 }}
      >
        {alumnis.map((alumni, index) => {
          return (
            <SwiperSlide tag="li" key={index}>
              <div className="slide">
                <h2 className="char1">“</h2>
                <div>
                  <img src={alumni.acf.profile_image} alt="alumni-prof-pic" />
                </div>
                <div className="profile">
                  <p className="alumni-name">{alumni.acf.alumni_name}</p>
                  <p className="stream">Stream chosen - {alumni.acf.stream}</p>
                  <p className="year">{alumni.acf.graduation_year}</p>
                  <p className="alumni-comment">{alumni.acf.comment}</p>
                  <Link
                    to={{
                      pathname: "/alumnis",
                    }}
                    className="link-to-alumni"
                  >
                    See More
                  </Link>
                </div>
                <h2 className="char2">“</h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
}
