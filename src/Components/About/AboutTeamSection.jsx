import React from "react";
import AboutImage from '../../Assets/Images/AboutTeamImage.svg'
const AboutTeamSection = ()=>{
    return(
        <section className="AboutSection">
            <div className="container CustomContainer">
                <div className="row AboutPageRow">
                    <div className="col-lg-5 AboutPageImage">
                        <img src={AboutImage} width="100%" alt="" />
                        
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 AboutPageCol">
                        <h1 className="AboutPageHeader">Our Team</h1>
                        <div className="UnderAboutHr"></div>
                        <span className="GoalSpan">Our team is productive, creative, principled, ambitious, but most importantly, they are pioneers in their fields. We rely on our skills and capabilities and expertise to achieve your goals and to overcome challenges and obstacles as your partner in business. We deliver quality service with comprehensive reports and reliable data to ensure a proper analysis. We aim for superior clients’ service and to build success stories.</span>
                    </div>
                    
                </div>
                
            </div>
        </section>
    );
}
export default AboutTeamSection;