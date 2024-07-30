import React from "react";
import Footer from "../../Components/Footer/Footer";
import AboutFirstSection from "../../Components/About/AboutFirstSection";
import './About.css'
import GoalSection from "../../Components/About/GoalSection";
import VisionSection from "../../Components/About/VisionSection";
import StrategySection from "../../Components/About/StrategySection";
import MilestoneSection from "../../Components/About/MilestoneSection";
import AboutTeamSection from "../../Components/About/AboutTeamSection";
import AboutTeamCardsSection from "../../Components/About/AboutTeamCardsSection";
const About = ()=>{
    return(
        <div className="About">
            <AboutFirstSection/>
            <div className="FirstAboutSectionBorder"> </div>
            <GoalSection/>
            <VisionSection/>
            <StrategySection/>
            <MilestoneSection/>
            <AboutTeamSection/>
            <AboutTeamCardsSection/>
            <Footer/>
        </div>
    );
}
export default About;