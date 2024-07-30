import React from "react";
import Footer from "../Footer/Footer";
import WhyUsSection from "./WhyUsSection";
const BottomFooter = ()=>{
    return(
        <section className="BottomFooter">
            <WhyUsSection/>
            <Footer/>
        </section>
    );
}
export default BottomFooter;