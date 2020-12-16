import React from "react";

const TeamMember = ({ image, name, title, year }) => {
  return (
    <div className="team-mamber">
      <div>
        <img src={image} alt="member-profile" />
      </div>
      <span>{name}</span>
      <span>{title}</span>
      <span>{year}</span>
    </div>
  );
};

export default TeamMember;
