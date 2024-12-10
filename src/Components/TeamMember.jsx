import React from "react";

function TeamMember({ name, role, image }) {
  return (
    <div className="team-member">
      <img src={image} alt={name} className="member-image" />
      <h3 className="member-name">{name}</h3>
      <p className="member-role">{role}</p>
    </div>
  );
}

export default TeamMember;
