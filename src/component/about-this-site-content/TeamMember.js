import React from "react";

const TeamMember = ({ image, name, title, year }) => {
  return (
    <div className="team-member">
      <div className="profile-image">
        <img src={image} alt="member-profile" />
      </div>
      <span className="member-name">{name}</span>
      <span>{title}</span>
      <span>{year}</span>
    </div>
  );
};

export default TeamMember;
