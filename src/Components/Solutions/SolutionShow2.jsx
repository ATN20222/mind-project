import React from "react";
const SolutionShow2 = ({Image , Text})=>{
    return(
        <section className="SolutionShow2">
            <div className="SolutionShow2TextContainer">
                <div className="SolutionShow2Text">
                <span>
                    {Text}
                </span>
                </div>
                
            </div>
            <div className="SolutionShow2Image">
                <img src={Image} width="100%" alt="" />
            </div>
              
        </section>
    );
}
export default SolutionShow2;