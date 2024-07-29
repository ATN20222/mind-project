import React from "react";
import BackgroundVideo from "../../Components/Home/BackgroundVideo";
import ServicesSection from "../../Components/Home/ServicesSection";
import SolutionSection from "../../Components/Home/SolutionsSection";
import './Home.css'
import AboutUsSection from "../../Components/Home/AboutUsSection";
import TeamSection from "../../Components/Home/TeamSection";
import ClientsSection from "../../Components/Home/ClientsSection";
import Footer from "../../Components/Footer/Footer";
const Home = ()=>{
    return(
        <div className="Home">
            
            <BackgroundVideo/>
            <ServicesSection/>
            <SolutionSection/>
            <AboutUsSection/>
            <TeamSection/>
            <ClientsSection/>
            <Footer/>
        </div>
    );
}
export default Home;