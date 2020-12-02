import React, { useEffect, useState } from "react";
import { API_URL } from "../../global_variable";
import { Link } from "react-router-dom";
// import StudentWork from "../../component/student-work/StudentWork";
import AlumniSuccess from "../../component/alumni-success/AlumniSuccess";
import StudentWorkTopIntro from "../../component/student-work/student-work-top-intro/StudentWorkTopIntro";

import useFetch from "../../component/useFetch";
import MobileBanner from "../../assets/homepage-banner_mobile.jpg";
import WebBannerWebP from "../../assets/homepage-bannerFinal.webp";
import WebBannerJPG from "../../assets/homepage-bannerFinal.jpp";
import background from "../../assets/hp_bg.png";

import isWebPSupported from "is-webp-supported";

import "./_TopPage.scss";

export default function TopPage() {
  const cf = useFetch(`${API_URL}/wp-json/acf/v3/pages/356`);

  const [width, setWidth] = useState(0);
  const updateSize = () => setWidth(window.innerWidth);

  const support = isWebPSupported();

  const bcgTopImg = () =>
    width > 600 && support
      ? `url(${WebBannerWebP})`
      : width > 600 && !support
      ? `url(${WebBannerJPG})`
      : `url(${MobileBanner})`;

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
  }, [width]);

  return (
    <div>
      {cf !== null ? (
        <div className="front-page">
          <div className="intro" style={{ background: bcgTopImg() }}>
            <div className="intro-desc">
              <h1>{cf.acf.title_intro}</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: cf.acf.description_intro,
                }}
              ></p>
              <Link className="button" to="/about-us">
                {cf.acf.link_text_front_top}
              </Link>
            </div>
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
              <a
                href={cf.acf.apply_now_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cf.acf.apply_now_button}
              </a>
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
