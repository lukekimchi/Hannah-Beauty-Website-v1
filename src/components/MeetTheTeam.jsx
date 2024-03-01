import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { teamMemberData } from "../constants/team";
import { motion as m } from "framer-motion";
import { fadeInUp, fadeInDown } from "../constants/animations";

const MeetTheTeam = () => {
  return (
    <m.div className="flex justify-center" {...fadeInUp(0.1)}>
      <div className="w-5/6 border-t border-gray-500 py-24">
        <h2 className="mb-16">Meet The Team</h2>
        <m.div
          className="flex h-96 items-center justify-center"
          {...fadeInDown(0)}
        >
          {teamMemberData.map((teamMember, index) => (
            <m.div key={teamMember.id} {...fadeInDown(0.3 * index)}>
              <TeamMemberCard
                name={teamMember.name}
                img={teamMember.img}
                role={teamMember.role}
              />
            </m.div>
          ))}
        </m.div>
      </div>
    </m.div>
  );
};

export default MeetTheTeam;
