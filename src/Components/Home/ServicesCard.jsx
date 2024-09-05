import React from "react";
import './ServicesSection.css'
import { Link } from "react-router-dom";
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

                <Link to='/services' className="btn btn-danger NavContactBtn ServiceCardShowMore">Read more</Link>
            </div>

        </div>
    );
}
export default ServicesCard;