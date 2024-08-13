import React from "react";
import { Link } from "react-router-dom";
const NewsCard = ({id , image , title , OnReadMore})=>{
    return(
        <div className="NewsCard">
            <div className="NewsCardImageContainer">
                <img src={image} width="100%" alt="" />
            </div>
            <div className="NewsCardTitle">
                {title}
            </div>
            <div className="NewsCardReadMore">
                <button onClick={()=>OnReadMore(id)}  className="btn btn-danger NavContactBtn " >Read more</button>

            </div>
        </div>
    );
}
export default NewsCard;