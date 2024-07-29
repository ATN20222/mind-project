import React from "react";
import ServicesSlider from "../Sliders/ServiceSlider/ServicesSlider";
import TeamSlider from "../Sliders/TeamSlider/TeamSlider";
const TeamSection =()=>{
    return(
        <section className="TeamSection">
            <div className="container">
                <div className="ServicesHeader">
                    <h1>Our Team</h1>
                    <span className="TeamDescription">Unstoppable Together: Our Team's <br /> Bond, Your Success Beyond
                    </span>
                </div>
            </div>

            <TeamSlider/>
        </section>
    );
}
export default TeamSection;