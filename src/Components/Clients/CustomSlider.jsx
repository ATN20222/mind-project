import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

import FoodResturantsClientsGroup_108 from '../../Assets/Images/FoodResturantsClients/Group 108.svg';
import FoodResturantsClientsGroup_60 from '../../Assets/Images/FoodResturantsClients/Group 60.svg';
import FoodResturantsClientsGroup_62_1 from '../../Assets/Images/FoodResturantsClients/Group 62-1.svg';
import FoodResturantsClientsGroup_62 from '../../Assets/Images/FoodResturantsClients/Group 62.svg';
import FoodResturantsClientsGroup_63 from '../../Assets/Images/FoodResturantsClients/Group 63.svg';
import FoodResturantsClientsGroup_71 from '../../Assets/Images/FoodResturantsClients/Group 71.svg';


import GovernmentalClientsGroup_106 from '../../Assets/Images/GovernmentalClients/Group 106.svg';
import GovernmentalClientsGroup_107 from '../../Assets/Images/GovernmentalClients/Group 107.svg';
import GovernmentalClientsGroup_59 from '../../Assets/Images/GovernmentalClients/Group 59.svg';
import GovernmentalClientsGroup_60 from '../../Assets/Images/GovernmentalClients/Group 60.svg';
import GovernmentalClientsGroup_61 from '../../Assets/Images/GovernmentalClients/Group 61.svg';
import GovernmentalClientsGroup_63 from '../../Assets/Images/GovernmentalClients/Group 63.svg';
import GovernmentalClientsGroup_80 from '../../Assets/Images/GovernmentalClients/Group 80.svg';
import GovernmentalClientsGroup_97 from '../../Assets/Images/GovernmentalClients/Group 97.svg';
import GovernmentalClientsGroup_98 from '../../Assets/Images/GovernmentalClients/Group 98.svg';
import GovernmentalClientsGroup_99 from '../../Assets/Images/GovernmentalClients/Group 99.svg';




import EducationalClient from '../../Assets/Images/EducationClients/Group 61.svg';
import ClientsCategoryCard from "./ClientsCategoryCard";



import HealthandmedicalClientsGroup_109 from '../../Assets/Images/HealthandmedicalClients/Group 109.svg';
import HealthandmedicalClientsGroup_110 from '../../Assets/Images/HealthandmedicalClients/Group 110.svg';
import HealthandmedicalClientsGroup_111 from '../../Assets/Images/HealthandmedicalClients/Group 111.svg';
import HealthandmedicalClientsGroup_112 from '../../Assets/Images/HealthandmedicalClients/Group 112.svg';
import HealthandmedicalClientsGroup_113 from '../../Assets/Images/HealthandmedicalClients/Group 113.svg';
import HealthandmedicalClientsGroup_114 from '../../Assets/Images/HealthandmedicalClients/Group 114.svg';


import MediaClientsGroup_123 from '../../Assets/Images/MediaClients/Group 123.svg';
import MediaClientsGroup_124 from '../../Assets/Images/MediaClients/Group 124.svg';
import MediaClientsGroup_125 from '../../Assets/Images/MediaClients/Group 125.svg';
import MediaClientsGroup_126 from '../../Assets/Images/MediaClients/Group 126.svg';
import MediaClientsGroup_127 from '../../Assets/Images/MediaClients/Group 127.svg';
import MediaClientsGroup_128 from '../../Assets/Images/MediaClients/Group 128.svg';
import MediaClientsGroup_129 from '../../Assets/Images/MediaClients/Group 129.svg';
import MediaClientsGroup_130 from '../../Assets/Images/MediaClients/Group 130.svg';
import MediaClientsGroup_131 from '../../Assets/Images/MediaClients/Group 131.svg';



import IndustrialClientsGroup_116 from '../../Assets/Images/IndustrialClients/Group 116.svg';
import IndustrialClientsGroup_117 from '../../Assets/Images/IndustrialClients/Group 117.svg';
import IndustrialClientsGroup_118 from '../../Assets/Images/IndustrialClients/Group 118.svg';
import IndustrialClientsGroup_119 from '../../Assets/Images/IndustrialClients/Group 119.svg';
import IndustrialClientsGroup_120 from '../../Assets/Images/IndustrialClients/Group 120.svg';
import IndustrialClientsGroup_121 from '../../Assets/Images/IndustrialClients/Group 121.svg';


import ITClientsGroup_60 from '../../Assets/Images/ITClients/Group 60.svg';
import ITClientsGroup_62 from '../../Assets/Images/ITClients/Group 62.svg';
import ITClientsGroup_83 from '../../Assets/Images/ITClients/Group 83.svg';


import MallsClientsGroup_102 from '../../Assets/Images/MallsClients/Group 102.svg';
import MallsClientsGroup_122 from '../../Assets/Images/MallsClients/Group 122.svg';
import MallsClientsGroup_69 from '../../Assets/Images/MallsClients/Group 69.svg';
import MallsClientsGroup_70 from '../../Assets/Images/MallsClients/Group 70.svg';
import MallsClientsGroup_78 from '../../Assets/Images/MallsClients/Group 78.svg';


import TourismGroup_150 from '../../Assets/Images/Tourism/Group 150.svg';
import TourismGroup_151 from '../../Assets/Images/Tourism/Group 151.svg';

import RealStateClientsGroup_389 from '../../Assets/Images/RealStateClients/Group 389.svg';
import RealStateClientsGroup_390 from '../../Assets/Images/RealStateClients/Group 390.svg';
import RealStateClientsGroup_391 from '../../Assets/Images/RealStateClients/Group 391.svg';
import RealStateClientsGroup_392 from '../../Assets/Images/RealStateClients/Group 392.svg';
import RealStateClientsGroup_393 from '../../Assets/Images/RealStateClients/Group 393.svg';
import RealStateClientsGroup_394 from '../../Assets/Images/RealStateClients/Group 394.svg';
import RealStateClientsGroup_395 from '../../Assets/Images/RealStateClients/Group 395.svg';
import RealStateClientsGroup_396 from '../../Assets/Images/RealStateClients/Group 396.svg';
import RealStateClientsGroup_397 from '../../Assets/Images/RealStateClients/Group 397.svg';
import RealStateClientsGroup_398 from '../../Assets/Images/RealStateClients/Group 398.svg';


import SportsClientsGroup_143 from '../../Assets/Images/SportsClients/Group 143.svg';
import SportsClientsGroup_144 from '../../Assets/Images/SportsClients/Group 144.svg';
import SportsClientsGroup_145 from '../../Assets/Images/SportsClients/Group 145.svg';
import SportsClientsGroup_146 from '../../Assets/Images/SportsClients/Group 146.svg';
import SportsClientsGroup_147 from '../../Assets/Images/SportsClients/Group 147.svg';


import images from "../../Test";

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
const CustomSlider = ()=>{
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
        },
        {
            id:3,
            title:'Food & Restaurants',
            images: [
                FoodResturantsClientsGroup_108,
                FoodResturantsClientsGroup_60,
                FoodResturantsClientsGroup_62_1,
                FoodResturantsClientsGroup_62,
                FoodResturantsClientsGroup_63,
                FoodResturantsClientsGroup_71
            ]
        },
        {
            id:4,
            title:'Governmental and NGOs',
            images:[
                GovernmentalClientsGroup_106,
                GovernmentalClientsGroup_107,
                GovernmentalClientsGroup_59,
                GovernmentalClientsGroup_60,
                GovernmentalClientsGroup_61,
                GovernmentalClientsGroup_63,
                GovernmentalClientsGroup_80,
                GovernmentalClientsGroup_97,
                GovernmentalClientsGroup_98,
                GovernmentalClientsGroup_99
            ]
        },
        {
            id:5,
            title:'Health & Medical Care',
            images:[
                HealthandmedicalClientsGroup_109,
                HealthandmedicalClientsGroup_110,
                HealthandmedicalClientsGroup_111,
                HealthandmedicalClientsGroup_112,
                HealthandmedicalClientsGroup_113,
                HealthandmedicalClientsGroup_114            
            ]
        },
        {
            id:6,
            title:'Media & Entertainment',
            images:[
                MediaClientsGroup_123,
                MediaClientsGroup_124,
                MediaClientsGroup_125,
                MediaClientsGroup_126,
                MediaClientsGroup_127,
                MediaClientsGroup_128,
                MediaClientsGroup_129,
                MediaClientsGroup_130,
                MediaClientsGroup_131         
            ]
        },


        {
            id:7,
            title:'Industrial & Commercial',
            images:[
                IndustrialClientsGroup_116,
                IndustrialClientsGroup_117,
                IndustrialClientsGroup_118,
                IndustrialClientsGroup_119,
                IndustrialClientsGroup_120,
                IndustrialClientsGroup_121,
            ]
        },
        
        {
            id:8,
            title:'IT & Telecommunication',
            images:[
                ITClientsGroup_60,
                ITClientsGroup_62,
                ITClientsGroup_83,
            ]
        },
        {
            id:9,
            title:'Malls & Shops',
            images:[
                MallsClientsGroup_102,
                MallsClientsGroup_122,
                MallsClientsGroup_69 ,
                MallsClientsGroup_70 ,
                MallsClientsGroup_78 ,
            ]
        },
        {
            id:10,
            title:'Tourism',
            images:[
                TourismGroup_150,
                TourismGroup_151,
            ]
        },
        {
            id:11,
            title:'Real-estate',
            images:[
                RealStateClientsGroup_389,
                RealStateClientsGroup_390,
                RealStateClientsGroup_391,
                RealStateClientsGroup_392,
                RealStateClientsGroup_393,
                RealStateClientsGroup_394,
                RealStateClientsGroup_395,
                RealStateClientsGroup_396,
                RealStateClientsGroup_397,
                RealStateClientsGroup_398,
            ]
        },
           
        {
            id:12,
            title:'Sports',
            images:[
                SportsClientsGroup_143,
                SportsClientsGroup_144,
                SportsClientsGroup_145,
                SportsClientsGroup_146,
                SportsClientsGroup_147,
            ]
        },
        
    ]
    const [selectedClient , setSelectedClient] = useState(clients[0]);
    
    const handleClientChanged = (id)=>{
        var selected = clients.find(i=>i.id==id);
        setSelectedClient(selected);
    }
    return(
        <div className="container CustomContainer">
                    <div className="slider-container ServicesSlider ClientsSlider">
                    
                        <Carousel
                            responsive={responsive2}
                            infinite={true}
                            autoPlay={false}
                            
                            arrows={false}
                            draggable={true}
                            customLeftArrow={<CustomPrevButton Class="" />}
                            customRightArrow={<CustomNextButton Class="" />}
                        >
                            
                            {clients.map((client) => (
                                <div className="SerciceCardContainer SerciceNewCardContainer " key={client.id}>
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

                    <div className="container">
                        <div className="row Center">
                            {selectedClient.images.map((image , index)=>(
                                <div className="ClientCardContainer col-lg-2 col-md-2 col-sm-4 col-5">
                                    <div className="ClientCard ClientCategoryCardNew">

                                        <img key={index} src={image} width="100%" alt={`image-${index}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    );
}
export default CustomSlider;