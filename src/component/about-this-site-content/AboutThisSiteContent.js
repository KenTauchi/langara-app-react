import React from "react";

const AboutThisSiteContent = ({
  title,
  image,
  description,
  link_title,
  link,
  index,
}) => {
  return (
    <div className={`about-this-site-content content-${index + 1}`}>
      <h1>{title}</h1>
      <div>
        <img src={image} alt="content-img" />
      </div>
      <p
        className="answer"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></p>
      <a href={link}>{link_title}</a>
    </div>
  );
};

export default AboutThisSiteContent;
