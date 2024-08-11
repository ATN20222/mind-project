import React from "react";
const SolutionShow1 = ({Image , Header , Text})=>{
    return(
        <section className="AboutSection">
            <div className="container CustomContainer">
                <div className="row AboutPageRow">
                <div className="col-lg-5  AboutPageImage">
                        <img src={Image} width="100%" alt="" />
                        
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 AboutPageCol">
                        <h1 className="AboutPageHeader">{Header}</h1>
                        <div className="UnderAboutHr"></div>
                        <span className="SolutionSection1Text">{Text}</span>
                    </div>
                    
                    
                </div>
                
            </div>
        </section>
    );
}
export default SolutionShow1;