import React from "react";
import Image from '../../Assets/Images/NewsFirstSectionImage.svg'
const NewsFirstSection = ()=>{
    return(
        <section className="AboutFirstSection">
            <div className="container CustomContainer">
                <div className="row AboutPageRow">
                    <div className="col-lg-7 AboutPageCol">
                        <h1 className="AboutPageHeader">News</h1>
                        <div className="UnderAboutHr"></div>
                        <span className="FirstAboutSpan">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </span>
                    </div>
                    <div className="col-lg-5 AboutPageImage">
                        <img src={Image} width="80%" alt="" />
                        
                    </div>
                </div>
                
            </div>
        </section>
    );
}
export default NewsFirstSection;