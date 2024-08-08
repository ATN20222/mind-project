import React from "react";
const SelectedSubServiceSection = ({id , Header, MainImage , description})=>{

    return(
        <section className="SelectedSubServiceSection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 SelectedSubServiceTextCol">
                        <div className="SelectedSubServiceText">
                            <div className="SelectedSubServiceHeader">
                                <span>{Header}</span>
                            </div>
                            <div className="SubServiceUnderline"></div>
                            <span className="SelectedSubServiceDescription">
                                {description}
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-7 SelectedServiceMainImageCol">
                        <div className="SelectedSubServiceImageContainer">
                            <img src={MainImage} width="100%" height="100%" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SelectedSubServiceSection;