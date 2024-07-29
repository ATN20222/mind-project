import React from "react";
const TeamCard = ({Image , Name , Role})=>{
    return(
        <div className="TeamCard col-lg-12">
            <div className="IconContainer">
                <div className="Circle">
                    <img src={Image} width="170%" alt="" />
                </div>
            </div>
            <h5 className="TeamName" >{Name}</h5>
            <span className="TeamRole">{Role}</span>
         

        </div>
    );
}
export default TeamCard;