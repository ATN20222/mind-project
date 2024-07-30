import React from "react";
import AboutImage from '../../Assets/Images/AboutVisionImage.svg'
const VisionSection = ()=>{
    return(
        <section className="AboutSection">
            <div className="container CustomContainer">
                <div className="row AboutPageRow">

                    <div className="col-lg-7 AboutPageCol">
                        <h1 className="AboutPageHeader">Vision</h1>
                        <div className="UnderAboutHr"></div>
                        <span className="FirstAboutSpan">We envision a future where our collective minds, resources, and innovative ideas work together to create a thriving community. We believe in ethical business practices that benefit society and drive economic growth. By delivering next-level solutions, we aim to enrich your brand, your audience, and the world around us.</span>
                    </div>
                    <div className="col-lg-5 AboutPageImage">
                        <img src={AboutImage} width="80%" alt="" />
                        
                    </div>
                    
                </div>
                
            </div>
        </section>
    );
}
export default VisionSection;