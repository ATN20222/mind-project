import React from "react";
import './Careers.css'
import CareersFirstSection from "../../Components/Careers/CareersFirstSection";
import JobsSection from "../../Components/Careers/JobsSection";
import Footer from "../../Components/Footer/Footer";
const Careers = ()=>{
    return(
        <div className="Careers">
            <CareersFirstSection/>
            <div className="FirstAboutSectionBorder"> </div>           
            <JobsSection/>
            <Footer/>
        </div>
    );
}
export default Careers;