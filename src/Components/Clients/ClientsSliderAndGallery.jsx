import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SubServiceCard from "../Services/SubServiceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import BussinessClientGroup_59_1 from '../../Assets/Images/BussinessClients/Group 59-1.svg';
import BussinessClientGroup_59_2 from '../../Assets/Images/BussinessClients/Group 59-2.svg';
import BussinessClientGroup_59 from '../../Assets/Images/BussinessClients/Group 59.svg';
import BussinessClientGroup_60_1 from '../../Assets/Images/BussinessClients/Group 60-1.svg';
import BussinessClientGroup_60_2 from '../../Assets/Images/BussinessClients/Group 60-2.svg';
import BussinessClientGroup_60_3 from '../../Assets/Images/BussinessClients/Group 60-3.svg';
import BussinessClientGroup_60 from '../../Assets/Images/BussinessClients/Group 60.svg';
import BussinessClientGroup_61_1 from '../../Assets/Images/BussinessClients/Group 61-1.svg';
import BussinessClientGroup_61 from '../../Assets/Images/BussinessClients/Group 61.svg';
import BussinessClientGroup_63_1 from '../../Assets/Images/BussinessClients/Group 63-1.svg';
import BussinessClientGroup_63 from '../../Assets/Images/BussinessClients/Group 63.svg';
import BussinessClientGroup_73 from '../../Assets/Images/BussinessClients/Group 73.svg';
import BussinessClientGroup_74 from '../../Assets/Images/BussinessClients/Group 74.svg';
import BussinessClientGroup_76 from '../../Assets/Images/BussinessClients/Group 76.svg';
import BussinessClientGroup_77 from '../../Assets/Images/BussinessClients/Group 77.svg';
import BussinessClientGroup_79 from '../../Assets/Images/BussinessClients/Group 79.svg';
import BussinessClientGroup_81 from '../../Assets/Images/BussinessClients/Group 81.svg';
import BussinessClientGroup_85 from '../../Assets/Images/BussinessClients/Group 85.svg';
import BussinessClientGroup_87 from '../../Assets/Images/BussinessClients/Group 87.svg';
import BussinessClientGroup_89 from '../../Assets/Images/BussinessClients/Group 89.svg';
import BussinessClientGroup_90 from '../../Assets/Images/BussinessClients/Group 90.svg';
import BussinessClientGroup_92 from '../../Assets/Images/BussinessClients/Group 92.svg';


import EducationalClient from '../../Assets/Images/EducationClients/Group 61.svg';
import ClientsCategoryCard from "./ClientsCategoryCard";

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
const responsive2 = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1300 },
        items: 5
    },
    ipad: {
        breakpoint: { max: 1300, min: 990 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 990, min: 768 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 768, min: 576 },
        items: 3
    },
    smobile: {
        breakpoint: { max: 576, min: 350 },
        items: 2
    },
    ssmobile: {
        breakpoint: { max: 350, min: 328 },
        items: 2
    },
    xsmobile: {
        breakpoint: { max: 328, min: 0 },
        items: 2
    }
};
const ClientsSliderAndGallery = ()=>{
    const clients = [
        
        {
            id: 1,
            title: 'Business & Corporate',
            images: [
                BussinessClientGroup_59_1,
                BussinessClientGroup_59_2,
                BussinessClientGroup_59,
                BussinessClientGroup_60_1,
                BussinessClientGroup_60_2,
                BussinessClientGroup_60_3,
                BussinessClientGroup_60,
                BussinessClientGroup_61_1,
                BussinessClientGroup_61,
                BussinessClientGroup_63_1,
                BussinessClientGroup_63,
                BussinessClientGroup_73,
                BussinessClientGroup_74,
                BussinessClientGroup_76,
                BussinessClientGroup_77,
                BussinessClientGroup_79,
                BussinessClientGroup_81,
                BussinessClientGroup_85,
                BussinessClientGroup_87,
                BussinessClientGroup_89,
                BussinessClientGroup_90,
                BussinessClientGroup_92
            ]
        },
        {
            id:2,
            title:'Educational',
            images:[EducationalClient
            ]
        }
        
            
        
    ]
    const [selectedClient , setSelectedClient] = useState(clients[0]);
    
    const handleClientChanged = (id)=>{
        var selected = clients.find(i=>i.id==id);
        setSelectedClient(selected);
    }
    return(
        <div className="ClientsSliderAndGallery">
            {/* {clients.map((client) => (
                                <div className="SerciceCardContainer SerciceNewCardContainer" key={client.id}>
                                    <ClientsCategoryCard
                                        id={client.id}
                                        title={client.title}
                                        IsSelected={selectedClient.id === client.id}
                                        onSelect={handleClientChanged}
                                    />
                                </div>
                            ))} */}
                <div className="container CustomContainer">
                    <div className="slider-container ServicesSlider ClientsSlider">
                    
                        <Carousel
                            responsive={responsive2}
                            infinite={false}
                            autoPlay={false}
                            autoPlaySpeed={2000}
                            arrows={false}
                            draggable={true}
                            customLeftArrow={<CustomPrevButton Class="" />}
                            customRightArrow={<CustomNextButton Class="" />}
                        >
                            
                            {clients.map((client) => (
                                <div className="SerciceCardContainer SerciceNewCardContainer" key={client.id}>
                                    <ClientsCategoryCard
                                        id={client.id}
                                        title={client.title}
                                        IsSelected={selectedClient.id === client.id}
                                        onSelect={handleClientChanged}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
        </div>
    );
}
export default ClientsSliderAndGallery;