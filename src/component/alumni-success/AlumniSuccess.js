import React from "react";
import useFetch from "../useFetch";
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import "./AlumniSuccess.scss";

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
      <p>{cf.acf.alumni_front_description}</p>
      <Swiper
        id="main"
        tag="ul"
        pagination
        autoplay
        pagination={{ clickable: true }}
        slidesPerView={1}
        paginationStyle={{ bottom: 0 }}
      >
        {alumnis.map((alumni, index) => {
          return (
            <SwiperSlide tag="li" key={index}>
              <div>
                <img src={alumni.acf.profile_image} />
              </div>
              <p>{alumni.acf.alumni_name}</p>
              <p>Stream chosen = {alumni.acf.stream}</p>
              <p>{alumni.acf.comment}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
