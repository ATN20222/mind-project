import React from "react";
import SolImage from '../../Assets/Images/SolutionsImage.svg'
import { Link } from "react-router-dom";
const SolutionSection = ()=>{

    return(
        <section className="SolutionSection Center">
            <div className="container CustomContainer">
                <div className="row">
                    
                    <div className="col-lg-6  col-md-6  SolutionSectionTextCol">
                        <h1 className="SolutionHeader">Solution</h1>
                        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facili</span>
                        <Link to='/solutions' className="btn btn-danger NavContactBtn ">Show more</Link>
                    
                    </div>
                    <div className="col-lg-6  col-md-6  SolutionSectionImageCol">
                        <img src={SolImage} width="100%" alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
}
export default SolutionSection;