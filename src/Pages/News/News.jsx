import React from "react";
import './News.css'
import NewsFirstSection from "../../Components/News/NewsFirstSection";
import NewsList from "../../Components/News/NewsList";
import Footer from "../../Components/Footer/Footer";
const News = ()=>{
    
    return(
        <div className="News">
            <NewsFirstSection/>
            <div className="FirstAboutSectionBorder"> </div>
            <NewsList/>
            <Footer/>
        </div>
    );
}
export default News;