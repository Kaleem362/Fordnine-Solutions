import React from "react";
import { teamMembers } from "../../../images/TeamData.jsx";
import TeamMember from "../../TeamMember.jsx";
import "./TeamPage.css";

const TeamPage = () => {
  return (
    <div>
      <div className="team-section">
        <h2
          style={{
            marginBottom: "2rem",
            fontSize: "60px",
            textAlign: "center",
          }}
        >
          Our Team
        </h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
