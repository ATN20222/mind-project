import React from "react";
import Image from '../../Assets/Images/CareersImage.svg'
const CareersFirstSection = ()=>{
    return(
        <section className="CareersFirstSection">
            <div className="container CustomContainer">
                <div className="row AboutPageRow">
                    <div className="col-lg-7 AboutPageCol">
                        <h1 className="AboutPageHeader">Find your tribe at Mind!</h1>
                        <div className="UnderAboutHr"></div>
                        <span className="FirstAboutSpan">
                            <div className="CareerFirstSectionSpan">
                                Are you ambitious, driven and passionate about all things digital? Do you want a job that presents new challenges every day, where you’ll be rewarded for your hard work with the potential for enormous career growth?
                            </div>
                            <div className="CareerFirstSectionSpan">
                            If you answered yes to either of these questions, we want you to work for us. Digital is the way of the future, and we’re looking for creative, innovative and forward-thinking individuals to join our team. We want imaginative marketers, resourceful creatives, savvy salespeople and tech whizzes who will receive generous recognition and remuneration for their efforts.

                            </div>
                            <div className="CareerFirstSectionSpan">

                            If you’re interested in joining us on our digital journey, we’d love to hear from you. Get in touch with the Mind team today!
                            </div>

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
export default CareersFirstSection;