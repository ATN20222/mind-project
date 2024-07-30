import React from "react";
import AboutImage from '../../Assets/Images/AboutGoal.svg'
const GoalSection = ()=>{
    return(
        <section className="AboutSection">
            <div className="container CustomContainer">
                <div className="row AboutPageRow">
                    <div className="col-lg-5 AboutPageImage">
                        <img src={AboutImage} width="100%" alt="" />
                        
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 AboutPageCol">
                        <h1 className="AboutPageHeader">Goal</h1>
                        <div className="UnderAboutHr"></div>
                        <span className="GoalSpan">MIND is committed to pushing boundaries and delivering cutting-edge solutions. We combine intellectual expertise with tangible results, serving clients locally and internationally. Our mission is to constantly innovate, develop, and deliver the next level of marketing, advertising, and PR experiences.</span>
                    </div>
                    
                </div>
                
            </div>
        </section>
    );
}
export default GoalSection;