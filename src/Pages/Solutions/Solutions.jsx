import React, { useEffect, useState } from "react";
import SolutionsFirstSection from '../../Components/Solutions/SolutionsFirstSection';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Solutions.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AllClasses from '../../Assets/Images/AllClasses.png';
import SolutionCard from "../../Components/Solutions/SolutionCard";
import AllClassesImage1 from '../../Assets/Images/Solutions/AllClassesImage1.svg';
import AllClassesImage2 from '../../Assets/Images/Solutions/AllClassesImage2.png';
import AllClassesImage3 from '../../Assets/Images/Solutions/AllClassesImage3.png';
import SolutionShow1 from "../../Components/Solutions/SolutionShow1";
import SolutionShow2 from "../../Components/Solutions/SolutionShow2";
import SolutionShow3 from "../../Components/Solutions/SolutionShow3";
import Footer from "../../Components/Footer/Footer";
const CustomPrevButton = ({ onClick, Class }) => (
    <button className={`Center CustomPrevBtn ${Class}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
    </button>
);

const CustomNextButton = ({ onClick, Class }) => (
    <button className={`Center CustomNextBtn ${Class}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
    </button>
);

const Solutions = () => {
    const [selectedSolution, setSelectedSolution] = useState(1);
    const [selectedSolutionData, setSelectedSolutionData] = useState(null);

    const solutions = [
        {
            id: 1,
            icon: AllClasses,
            header: 'All Classes',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            section1Image: AllClassesImage1,
            section1Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            section2Image: AllClassesImage2,
            section2Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            section3Image: AllClassesImage3,
            section3Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 2,
            icon: AllClasses,
            header: 'All Classes',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        }
    ];

    const handleOnSelect = (id) => {
        const sol = solutions.find(i => i.id === id);
        setSelectedSolution(id);
        setSelectedSolutionData(sol || {}); 
    };
    useEffect(()=>{
        setSelectedSolutionData(solutions[0]);
    },[])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1300 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1300, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 768, min: 585 },
            items: 2
        },
        smobile: {
            breakpoint: { max: 585, min: 350 },
            items: 1
        },
        xsmobile: {
            breakpoint: { max: 350, min: 0 },
            items: 1
        }
    };

    return (
        <div className="Solutions">
            <SolutionsFirstSection />
            <div className="FirstAboutSectionBorder"> </div>
            <section className="SliderSolutionSections">
                <div className="container CustomContainer">
                    <div className="SliderSolutionText">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                    </div>
                </div>
                {/* Slider */}
                <div className="container CustomContainer">
                    <div className="slider-container ServicesSlider">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={2000}
                            draggable={true}
                            customLeftArrow={<CustomPrevButton Class="" />}
                            customRightArrow={<CustomNextButton Class="" />}
                        >
                            {solutions.map((solution) => (
                                <div className="SerciceCardContainer" key={solution.id}>
                                    <SolutionCard
                                        id={solution.id}
                                        icon={solution.icon}
                                        Header={solution.header}
                                        text={solution.text}
                                        IsSelected={selectedSolution === solution.id}
                                        onSelect={handleOnSelect}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                {selectedSolutionData && (
                    <SolutionShow1
                        key={selectedSolutionData.id}
                        Header={selectedSolutionData.header}
                        Image={selectedSolutionData.section1Image}
                        Text={selectedSolutionData.section1Text}
                    />
                )}

                
            </section>
            {selectedSolutionData&&
                    <SolutionShow2
                        Image={selectedSolutionData.section2Image}
                        Text={selectedSolutionData.section2Text}
                    />
                }
            {selectedSolutionData&&
                <SolutionShow3
                    Image={selectedSolutionData.section3Image}
                    Text={selectedSolutionData.section3Text}
                />
            }

            <Footer/>
        </div>
    );
}

export default Solutions;
