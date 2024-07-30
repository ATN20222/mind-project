import React, { useState, useRef, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";


const MilestoneSection = () => {

    

    const Years = [
        { id: 0, year: 2010, yearInSlider: `10`, text: "All started here" },
        { id: 1, year: 2011, yearInSlider: `11`, text: "All started here" },
        { id: 2, year: 2012, yearInSlider: `12`, text: "All started here" },
        { id: 3, year: 2013, yearInSlider: `13`, text: "All started here" },
        { id: 4, year: 2014, yearInSlider: `14`, text: "All started here" },
        { id: 5, year: 2015, yearInSlider: `15`, text: "All started here" },
        { id: 6, year: 2016, yearInSlider: `16`, text: "All started here" },
        { id: 7, year: 2017, yearInSlider: `17`, text: "All started here" },
        { id: 8, year: 2018, yearInSlider: `18`, text: "All started here" },
        { id: 9, year: 2019, yearInSlider: `19`, text: "All started here" },
        { id: 10, year: 2020, yearInSlider: `20`, text: "All started here" },
        { id: 11, year: 2021, yearInSlider: `21`, text: "All started here" },
        { id: 12, year: 2022, yearInSlider: `22`, text: "All started here" },
        { id: 13, year: 2023, yearInSlider: `23`, text: "All started here" },
        { id: 14, year: 2024, yearInSlider: `24`, text: "New start" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        beforeChange: (current, next) => setSelectedYear(next)
    };

    const [selectedYear, setSelectedYear] = useState(1);
    const sliderRef = useRef(null);

    const handleYearClick = (index) => {
        setSelectedYear(index);
        sliderRef.current.slickGoTo(index);
    };
    const [tags, setTags] = useState(["tag1" ,"tag2"]);
    const formData = new FormData();
    formData.append('tags', tags);
    const handleSubmit = async () => {
        
      try {
        console.log(formData);
        const response = await axios.post('https://780e-102-186-106-101.ngrok-free.app/api/test', {
            tags
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        console.log('Response:', response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };
    useEffect(() => {
        handleSubmit();
      }, []);

    return (
        <section className="MileStoneAboutSection">
            <div className="container CustomContainer">
                <div className="row AboutPageRow">

                    <div className="col-lg-5 col-md-12 AboutPageCol">
                        <h1 className="AboutPageHeader">Milestone</h1>
                        <div className="UnderAboutHr"></div>
                        <span className="FirstAboutSpan">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</span>
                    </div>

                    <div className="col-lg-1">
                        {Years.map((item, index) => (
                            <div
                                key={item.id}
                                className={`${item.id === selectedYear ? "SelectedYear" : "YearItemToSelect"}`}
                                onClick={() => handleYearClick(index)}
                            >
                                <span>{item.year}</span>
                            </div>
                        ))}
                    </div>

                    <div className="col-lg-6 AboutPageImage MileStoneCol">
                        <div className="slider-container">
                            <Slider ref={sliderRef} {...settings}>
                                {Years.map((item) => (
                                    <div key={item.id} className="slide">
                                        <div className="year-box">
                                            <div className="YearNumber">
                                                <h1>20</h1>
                                            </div>
                                            <div className="YearNumber">
                                                <h1>{item.yearInSlider}</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="TextYear">
                            <h3>
                                {Years.find(i => i.id === selectedYear).text}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MilestoneSection;
