import React from "react";
import './ServicesSection.css'
import ServicesSlider from "../Sliders/ServiceSlider/ServicesSlider";
const ServicesSection =()=>{
    return(
        <section className="ServicesSection">
            <div className="container CustomContainer">
                <div className="ServicesHeader">
                    <h1>Our Services</h1>
                    <span className="ServicesDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                </div>
            </div>

            <ServicesSlider/>
        </section>
    );
}
export default ServicesSection;