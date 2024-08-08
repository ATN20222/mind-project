import React from "react";

const SolutionCard = ({ id, icon, Header,text, IsSelected, onSelect }) => {
    return (
        <div className={`ServicesNewCard SolutionCard col-lg-12 ${IsSelected ? "SelectedServicesCard" : ""}`} >
            <div className="ImageContainer SolutionCardImage">
                <img src={icon} width="100%" alt={Header} />
            </div>
            <h3 className="HeaderServiceNewCard">{Header}</h3>
            <div className="ServicesCardHr"></div>
            <div className={`SolutionCardText ${IsSelected?"SelectedSolutionCardText":"SelectSolutionCardText"}`}>

                <span>{text}</span>
            </div>
            <div className="Center ReadMoreNewServiceContainer">
                <button className="btn btn-danger NavContactBtn ServiceCardShowMore" onClick={() => onSelect(id)}>{IsSelected ? "Selected" : "Select"}</button>
            </div>
        </div>
    );
};

export default SolutionCard;
