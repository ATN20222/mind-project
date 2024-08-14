import React from "react";
import './Clients.css'
import ClientsFirstSection from "../../Components/Clients/ClientsFirstSection";
import ClientsSliderAndGallery from "../../Components/Clients/ClientsSliderAndGallery";
import CustomSlider from "../../Components/Clients/CustomSlider";
import Footer from "../../Components/Footer/Footer";
const Clients = ()=>{
    return(
        <div className="Clients">
            <ClientsFirstSection/>
            <div className="FirstAboutSectionBorder"> </div>
            {/* <ClientsSliderAndGallery/> */}
            <CustomSlider/>
            <Footer/>
        </div>
    );
}
export default Clients;