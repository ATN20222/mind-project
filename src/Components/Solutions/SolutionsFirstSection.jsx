import React from "react";
import Image from '../../Assets/Images/SolutionPageImage.svg';

const SolutionsFirstSection = () => {
    return (
        <section className="AboutFirstSection">
            <div className="container CustomContainer">
                <div className="row AboutPageRow">
                    <div className="col-lg-7 AboutPageCol">
                        <div className="IntegratedSolutions">

                            <span className="">Integrated Creative</span>
                        </div>
                        <div className="SolutionsWord">
                            <span>Solutions</span>
                        </div>
                        <div className="SolutionsFirstSectionText">
                            <span>We strive to deliver exceptional customer experiences by seamlessly integrating creative and technical aspects into our solutions.</span>
                        </div>
                    </div>
                    <div className="col-lg-5 AboutPageImage">
                        <img src={Image} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SolutionsFirstSection;
