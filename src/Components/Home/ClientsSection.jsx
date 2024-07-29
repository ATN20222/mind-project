import React from "react";
import ClientsSlider from "../Sliders/ClientsSlider/ClientsSlider";
const ClientsSection =()=>{
    return(
        <section className="ClientsSection">
            <div className="container">
                <div className="ServicesHeader">
                    <h1>Clients</h1>
                    <span className="ServicesDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>

                </div>
            </div>

            {/* <ServicesSlider/> */}
            <ClientsSlider/>
        </section>
    );
}
export default ClientsSection;