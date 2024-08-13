import React, { useState, useRef } from "react";
import NewsData from "../../Components/News/NewsData";
import NewsCard from "./NewsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ITEMS_PER_PAGE = 9;

const NewsList = () => {
    const [latestNews, setlatestNews] = useState(NewsData[NewsData.length - 1]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const latestNewsRef = useRef(null);

    const handleReadMore = (id) => {
        const news = NewsData.find(i => i.id === id);
        setIsTransitioning(true);
        if (latestNewsRef.current) {
            latestNewsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setTimeout(() => {
            setlatestNews(news);
            setIsTransitioning(false);
        }, 500);
    };

    const totalPages = Math.ceil(NewsData.length / ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const currentItems = NewsData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <section className="AllNews" ref={latestNewsRef}>
            <div className="container">
                <div className="row">
                    <div className={`col-lg-12 LatestNewsCard ${isTransitioning ? 'transitioning' : ''}`}>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="LatestNewsImageContainer">
                                    <img src={latestNews.image} width="100%" alt="News" />
                                </div>
                            </div>
                            <div className="col-lg-6 LatestNewsCol">
                                <div className="LatestNewsCardTags">
                                    {latestNews.tags.map((tag, index) => (
                                        <div key={index} className="TagItem">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <div className="LatestNewsTitle">
                                    <span>{latestNews.title}</span>
                                </div>
                                <div className="LatestNewsDescription">
                                    <span>{latestNews.description}</span>
                                </div>
                                {/* <div className="LatestNewsShowMore">
                                    READ MORE <FontAwesomeIcon icon={faChevronRight}/>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="NewsCardsContainer row">
                    {currentItems.map((news, index) => (
                        <div className="col-lg-4 col-md-6 NewsCardItem" key={index}>
                            <NewsCard
                                id={news.id}
                                title={news.title}
                                image={news.image}
                                OnReadMore={handleReadMore}
                            />
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    <button
                        className="page-nav"
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className="page-nav"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                    <FontAwesomeIcon icon={faChevronRight}/>

                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsList;
