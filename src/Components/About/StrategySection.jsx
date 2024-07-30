import React from "react";
import AboutImage from '../../Assets/Images/AboutStrategyImage.svg'
const StrategySection = ()=>{
    return(
        <section className="AboutSection">
            <div className="container CustomContainer">
                <div className="row AboutPageRow">
                <div className="col-lg-5  AboutPageImage">
                        <img src={AboutImage} width="100%" alt="" />
                        
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 AboutPageCol">
                        <h1 className="AboutPageHeader">Strategy</h1>
                        <div className="UnderAboutHr"></div>
                        <span className="FirstAboutSpan">We understand that every business is unique. That's why we take a collaborative approach, working closely with you to understand your specific needs and objectives. Our team specializes in creating diverse services and crafting personalized, effective plans that deliver impactful results.</span>
                    </div>
                    
                    
                </div>
                
            </div>
        </section>
    );
}
export default StrategySection;