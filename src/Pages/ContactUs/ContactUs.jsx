import React from "react";
import './ContactUs.css'
import ContactUsFirstSection from "../../Components/ContactUs/ContactUsFirstSection";
import ContactUsForm from "../../Components/ContactUs/ContactUsForm";
import Footer from "../../Components/Footer/Footer";
const ContactUs = ()=>{
    return(
        <div className="ContactUs">
            <ContactUsFirstSection/>
            <div className="FirstAboutSectionBorder"> </div>
            <ContactUsForm/>
            
            <Footer/>
        </div>
    );
}
export default ContactUs;