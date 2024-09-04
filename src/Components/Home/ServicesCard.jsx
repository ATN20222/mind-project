import React from "react";
import './ServicesSection.css'
const ServicesCard = ({icon , Header, Description})=>{
    return(
        <div className="ServicesCard col-lg-12">
            <div className="IconContainer">
                <div className="Circle">
                    <img src={icon} width="40px" height="40px" alt="" />
                </div>
            </div>
            <h3 className="HeaderServiceCard" >{Header}</h3>
                <div className="ServicesCardHr"></div>
            <span className="ServiceDescription">{Description}</span>
            <div className="ReadMoreServiceContainer">

                <button className="btn btn-danger NavContactBtn ServiceCardShowMore">Read more</button>
            </div>

        </div>
    );
}
export default ServicesCard;