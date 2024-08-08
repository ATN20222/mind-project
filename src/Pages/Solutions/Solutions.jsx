import React, { useEffect, useState } from "react";
import SolutionsFirstSection from '../../Components/Solutions/SolutionsFirstSection'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Solutions.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AllClasses from '../../Assets/Images/AllClasses.png'
import SolutionCard from "../../Components/Solutions/SolutionCard";

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

const Solutions  = ()=>{
    const [selectedSolution , setSelectedSolution] = useState(1);
    const [selectedSolutionData , setselectedSolutionData] = useState(null);
    const solutions = [
        {
            id:1,
            icon:AllClasses,
            header:'All Classes',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        },
        {
            id:2,
            icon:AllClasses,
            header:'All Classes',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        }

    ]
    const handleOnSelect = (id)=>{
        var sol = solutions.find(i=>i.id==id);
        setSelectedSolution(id);
        setselectedSolutionData(sol)
    }
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1300 },
            items: 4
        },
        ipad: {
            breakpoint: { max: 1300, min: 990 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 990, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 768, min: 446 },
            items: 2
        },
        smobile: {
            breakpoint: { max: 446, min: 350 },
            items: 1
        },
        ssmobile: {
            breakpoint: { max: 350, min: 328 },
            items: 1
        },
        xsmobile: {
            breakpoint: { max: 328, min: 0 },
            items: 1
        }
    };

    
    return(
        <div className="Solutions">
            <SolutionsFirstSection/>
            <div className="FirstAboutSectionBorder"> </div>
            <section className="SliderSolutionSections">
                <div className="container CustomContainer">
                        <div className="SliderSolutionText">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                        </div>
                </div>
                




                {/* Slider */}
                <div className="container">
                    <div className="slider-container ServicesSlider">
                        <Carousel
                            responsive={responsive}
                            infinite={false}
                            autoPlay={false}
                            autoPlaySpeed={2000}
                            draggable={true}
                            customLeftArrow={<CustomPrevButton  Class="" />}
                            customRightArrow={<CustomNextButton Class="" />}
                        >
                            {solutions.map((solution) => (
                                <div className="SerciceCardContainer SerciceNewCardContainer" key={solution.id}>
                                    <SolutionCard
                                        id={solution.id}
                                        icon={solution.icon}
                                        Header={solution.header}
                                        text= {solution.text}
                                        IsSelected={selectedSolution === solution.id}
                                        onSelect={handleOnSelect}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                {/* End Slider */}



            </section>
        </div>
    );
}
export default Solutions;