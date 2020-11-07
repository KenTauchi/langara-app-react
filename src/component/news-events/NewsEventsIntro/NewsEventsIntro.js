import React from "react";
import { Link } from "react-router-dom";
import "./_NewsEventsIntro.scss";

export default function NewsEventsIntro({ title, date, article, path, img }) {
  const formatDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="news-events-intro">
      <Link
        to={{
          pathname: `/news_and_events/${path}`,
        }}
      >
        <h1>{title}</h1>
      </Link>
      <span>{formatDate()}</span>
      <p>{article}</p>
      <Link
        to={{
          pathname: `/news_and_events/${path}`,
        }}
      >
        <img src={img} />
      </Link>
    </div>
  );
}
