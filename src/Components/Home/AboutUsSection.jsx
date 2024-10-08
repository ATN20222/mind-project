import React from "react";
import AboutImage from '../../Assets/Images/AboutUsImage.svg'
import { Link } from "react-router-dom";

const AboutUsSection = ()=>{

    return(
        <section className="AboutSection Center">
            <div className="container CustomContainer">
                <div className="row">
                <div className="col-lg-6 col-md-6  SolutionSectionImageCol">
                        <img src={AboutImage} width="100%" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 SolutionSectionTextCol">
                        <h1 className="SolutionHeader">About Us</h1>
                        <span> <b>MIND</b>  provides complete solutions for your Marketing, Advertising and PR needs. We created MIND to add to your business’s success, internally and with your audience, our main goal is to establish your business and watch it flourish every day.</span>
                        <Link to='/about' className="btn btn-danger NavContactBtn ">Show more</Link>
                    
                    </div>
                    

                </div>
            </div>
        </section>
    );
}
export default AboutUsSection;