import React from "react";
import { API_URL } from "../../global_variable";

import useFetch from "../../component/useFetch";

import AboutThisSiteContent from "../../component/about-this-site-content/AboutThisSiteContent";
import TeamMember from "../../component/about-this-site-content/TeamMember";

const AboutThisSite = () => {
  const header = useFetch(
    `${API_URL}/wp-json/wp/v2/pages?slug=about-this-site-top `
  );
  const contents = useFetch(`${API_URL}/wp-json/acf/v3/about_this_site `);
  const members = useFetch(`${API_URL}/wp-json/acf/v3/langara_teammember`);

  return contents !== null && header !== null ? (
    <div className="about-this-site">
      <h1>{header[0].acf.header}</h1>
      <div className="icons">
        <div>
          <img src={header[0].acf.icon1} alt="icon" />
        </div>
        <div>
          <img src={header[0].acf.icon2} alt="icon" />
        </div>
        <div>
          <img src={header[0].acf.icon3} alt="icon" />
        </div>
      </div>
      <p
        className="header-description"
        dangerouslySetInnerHTML={{
          __html: header[0].acf.description,
        }}
      ></p>
      {contents.reverse().map((content, index) => (
        <AboutThisSiteContent
          title={content.acf.title}
          image={content.acf.image}
          description={content.acf.description}
          link_title={content.acf.link_title}
          link={content.acf.link}
          index={index}
        />
      ))}
      {members !== null ? (
        <div className="meet-the-team">
          {members.reverse().map((member) => (
            <TeamMember
              image={member.acf.profile_image}
              name={member.acf.member_name}
              title={member.acf.position_title}
              year={member.acf.academic_year}
            />
          ))}
        </div>
      ) : null}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default AboutThisSite;
