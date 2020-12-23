import React from "react";
import { API_URL } from "../../global_variable";

import useFetch from "../../component/useFetch";

import AboutThisSiteContent from "../../component/about-this-site-content/AboutThisSiteContent";
import TeamMember from "../../component/about-this-site-content/TeamMember";

import icon01 from "../../assets/icons01.svg";
import icon02 from "../../assets/icons02.svg";
import icon03 from "../../assets/icons03.svg";

const AboutThisSite = () => {
  const header = useFetch(
    `${API_URL}/wp-json/wp/v2/pages?slug=about-this-site-top `
  );
  const contents = useFetch(`${API_URL}/wp-json/acf/v3/about_this_site `);
  const members = useFetch(`${API_URL}/wp-json/acf/v3/langara_teammember`);

  return contents !== null && header !== null ? (
    <div className="about-this-site">
      <div className="about-this-site-top">
        <h1>{header[0].acf.header}</h1>
        <div className="icons">
          <div className="icon icon-1">
            <img src={icon01} alt="icon" />
          </div>
          <div className="icon icon-2">
            <img src={icon02} alt="icon" />
          </div>
          <div className="icon icon-3">
            <img src={icon03} alt="icon" />
          </div>
        </div>
        <p
          className="header-description"
          dangerouslySetInnerHTML={{
            __html: header[0].acf.description,
          }}
        ></p>
      </div>
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
          <h1>Meet The Team</h1>
          <div className="team-members">
            {members.reverse().map((member) => (
              <TeamMember
                image={member.acf.profile_image}
                name={member.acf.member_name}
                title={member.acf.position_title}
                year={member.acf.academic_year}
              />
            ))}
          </div>
          <p className="special-note">
            Special thank you to Jean Nguyen for making the website live and
            Trista Townsend for managing the WMDD email
          </p>
        </div>
      ) : null}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default AboutThisSite;
