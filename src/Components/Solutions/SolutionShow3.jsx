import React from "react";
const SolutionShow3 = ({Image , Text})=>{
    return(
        <section className="SolutionShow3">
            <div className="container CustomContainer">
            <div className="SolutionShow3Image">
                <img src={Image} width="100%" alt="" />
            </div>
            <div className="SolutionShow3TextContainer">
                <div className="SolutionShow3Text">
                <span>
                    {Text}
                </span>
                </div>
                
            </div>
            </div>

            
              
        </section>
    );
}
export default SolutionShow3;