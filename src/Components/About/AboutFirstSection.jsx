import React from "react";
import AboutImage from '../../Assets/Images/AboutUsPageImage.svg'
const AboutFirstSection = ()=>{
    return(
        <section className="AboutFirstSection">
            <div className="container CustomContainer">
                <div className="row AboutPageRow">
                    <div className="col-lg-7 AboutPageCol">
                        <h1 className="AboutPageHeader">About us</h1>
                        <div className="UnderAboutHr"></div>
                        <span className="FirstAboutSpan">MIND provides complete solutions for your Marketing, Advertising and PR needs. We created MIND to add to your business’s success, internally and with your audience, our main goal is to establish your business and watch it flourish every day.</span>
                    </div>
                    <div className="col-lg-5 AboutPageImage">
                        <img src={AboutImage} width="80%" alt="" />
                        
                    </div>
                </div>
                
            </div>
        </section>
    );
}
export default AboutFirstSection;