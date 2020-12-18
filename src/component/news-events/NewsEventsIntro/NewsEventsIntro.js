import React from "react";
import { Link } from "react-router-dom";
import "./_NewsEventsIntro.scss";

const style = (index) => {
  const odd = {
    order: 2,
  };
  const even = {
    order: 1,
  };
  return index % 2 === 1 ? odd : even;
};

export default function NewsEventsIntro({
  title,
  date,
  article,
  path,
  img,
  index,
}) {
  const formatDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="news-events-intro">
      <h1>News & Events Details</h1>
      <div className="news-intro-top">
        <div
          className={`news-event-intro ${index + 1}`}
          style={style(index + 1)}
        >
          <Link
            className="news-event-title"
            to={{
              pathname: `/news-and-events/${path}`,
            }}
          >
            <h2>{title}</h2>
          </Link>
          <span className="post-date">{formatDate()}</span>
          <p
            className="intro-desc"
            dangerouslySetInnerHTML={{
              __html: article,
            }}
          ></p>
        </div>
        <Link
          to={{
            pathname: `/news-and-events/${path}`,
          }}
        >
          <img src={img} alt="news-img" />
        </Link>
      </div>
    </div>
  );
}
