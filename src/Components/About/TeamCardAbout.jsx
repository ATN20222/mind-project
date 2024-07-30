import React from "react";
const TeamCardAbout = ({Image , Name , Role})=>{
    return(
        <div className="TeamCard col-lg-2 col-md-2 col-sm-2 col-2    TeamCardAbout">
            <div className="IconContainer">
                <div className="Circle">
                    <img src={Image} width="180%" alt="" />
                </div>
            </div>
            <h5 className="TeamName" >{Name}</h5>
            <span className="TeamRole">{Role}</span>
         

        </div>
    );
}
export default TeamCardAbout;