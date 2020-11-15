import React from "react";
import "./_NewsEventsSingle.scss";

export default function NewsEventsSingle(props) {
  const formatDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(props.date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="news-and-events-single">
      <h1>News & Events Details</h1>
      <div class="news-event-single">
        <h2>{props.title.rendered}</h2>
        <span className="post-date">{formatDate()}</span>
        <div>
          <img src={props.acf.article_image} alt="news-img" />
        </div>
        {props.acf.section1_title !== "" ? (
          <h3 className="article1-title">{props.acf.section1_title}</h3>
        ) : null}
        {props.acf.section1_article !== "" ? (
          <p
            className="article1"
            dangerouslySetInnerHTML={{
              __html: props.acf.section1_article,
            }}
          ></p>
        ) : null}
        {props.acf.section1_link !== "" ? (
          <a className="article1-link" href={props.acf.section1_link}>
            {props.acf.section1_link_title}
          </a>
        ) : null}
        {props.acf.section2_title !== "" ? (
          <h3 className="article2-title">{props.acf.section2_title}</h3>
        ) : null}
        {props.acf.section2_article !== "" ? (
          <p
            className="article2"
            dangerouslySetInnerHTML={{
              __html: props.acf.section2_article,
            }}
          ></p>
        ) : null}
        {props.acf.section2_link !== "" ? (
          <a className="article2-link" href={props.acf.section2_link}>
            {props.acf.section1_link_title}
          </a>
        ) : null}
        {props.acf.section3_title !== "" ? (
          <h3 className="article1-title">{props.acf.section3_title}</h3>
        ) : null}
        {props.acf.section3_article !== "" ? (
          <p
            className="article3"
            dangerouslySetInnerHTML={{
              __html: props.acf.section3_article,
            }}
          ></p>
        ) : null}
        {props.acf.section3_link !== "" ? (
          <a className="article1-link" href={props.acf.section3_link}>
            {props.acf.section3_link_title}
          </a>
        ) : null}
        {props.acf.section4_title !== "" ? (
          <h3 className="article1-title">{props.acf.section4_title}</h3>
        ) : null}
        {props.acf.section4_article !== "" ? (
          <p
            className="article4"
            dangerouslySetInnerHTML={{
              __html: props.acf.section4_article,
            }}
          ></p>
        ) : null}
        {props.acf.section4_link !== "" ? (
          <a className="article1-link" href={props.acf.section4_link}>
            {props.acf.section4_link_title}
          </a>
        ) : null}
      </div>
    </div>
  );
}
