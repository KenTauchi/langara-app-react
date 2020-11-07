import React from "react";

export default function NewsEventsSingle(props) {
  const formatDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(props.date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="news-and-events-single">
      <h1>{props.title.rendered}</h1>
      <span>{formatDate()}</span>
      <div>
        <img src={props.acf.article_image} />
      </div>
      {props.acf.section1_title !== "" ? (
        <h2 className="article1-title">{props.acf.section1_title}</h2>
      ) : null}
      {props.acf.section1_article !== "" ? (
        <p className="article1">{props.acf.section1_article}</p>
      ) : null}
      {props.acf.section1_link !== "" ? (
        <a className="article1-link" href={props.acf.section1_link}>
          {props.acf.section1_link_title}
        </a>
      ) : null}
      {props.acf.section2_title !== "" ? (
        <h2 className="article2-title">{props.acf.section2_title}</h2>
      ) : null}
      {props.acf.section2_article !== "" ? (
        <p className="article2">{props.acf.section2_article}</p>
      ) : null}
      {props.acf.section2_link !== "" ? (
        <a className="article2-link" href={props.acf.section2_link}>
          {props.acf.section1_link_title}
        </a>
      ) : null}
      {props.acf.section3_title !== "" ? (
        <h2 className="article1-title">{props.acf.section3_title}</h2>
      ) : null}
      {props.acf.section3_article !== "" ? (
        <p className="article1">{props.acf.section3_article}</p>
      ) : null}
      {props.acf.section3_link !== "" ? (
        <a className="article1-link" href={props.acf.section3_link}>
          {props.acf.section3_link_title}
        </a>
      ) : null}
      {props.acf.section4_title !== "" ? (
        <h2 className="article1-title">{props.acf.section4_title}</h2>
      ) : null}
      {props.acf.section4_article !== "" ? (
        <p className="article1">{props.acf.section4_article}</p>
      ) : null}
      {props.acf.section4_link !== "" ? (
        <a className="article1-link" href={props.acf.section4_link}>
          {props.acf.section4_link_title}
        </a>
      ) : null}
    </div>
  );
}
