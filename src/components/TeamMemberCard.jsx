import React from "react";

const TeamMemberCard = ({ name, img, role }) => {
  return (
    <div className="flex-col items-center justify-center">
      <div className="flex w-56 h-56 rounded-full overflow-hidden mx-10 my-5">
        <img
          src={img}
          alt={name + "profile picture"}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex-row">
        <h3 className="text-center">{name}</h3>
        <p className="text-xl lg:text-sm text-center text-gray-700 font-thin">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
