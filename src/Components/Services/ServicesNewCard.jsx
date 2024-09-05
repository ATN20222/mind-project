import React from "react";

const ServicesNewCard = ({ id, icon, Header, IsSelected, onSelect }) => {
    return (
        <div className={`ServicesNewCard col-lg-12 ${IsSelected ? "SelectedServicesCard" : ""}`} >
            <div className="ImageContainer">
                <img src={icon} width="190px" height="190px" alt={Header} />
            </div>
            <div className="ServicesCardHr"></div>
            <h3 className="HeaderServiceNewCard">{Header}</h3>
            <div className="Center ReadMoreNewServiceContainer">
                <button className="btn btn-danger NavContactBtn ServiceCardShowMore" onClick={() => onSelect(id)}>{IsSelected ? "Selected" : "Select"}</button>
            </div>
        </div>
    );
};

export default ServicesNewCard;
