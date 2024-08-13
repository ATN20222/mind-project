import React from "react";
import Image from '../../Assets/Images/ContactPageImage.svg'
const ContactUsFirstSection = ()=>{
    return(
        <section className="AboutFirstSection">
            <div className="container CustomContainer">
                <div className="row AboutPageRow">
                    <div className="col-lg-7 AboutPageCol">
                        <h1 className="AboutPageHeader">Contact us</h1>
                        <div className="UnderAboutHr"></div>
                        <span className="FirstContactSpan">
                            Feel Free to Write us <br /> Anytime                        
                        </span>
                    </div>
                    <div className="col-lg-5 AboutPageImage">
                        <img src={Image} width="100%" alt="" />
                        
                    </div>
                </div>
                
            </div>
        </section>
    );
}
export default ContactUsFirstSection;