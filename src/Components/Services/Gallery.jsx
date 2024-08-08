import React, { useEffect, useState } from 'react';
import './Gallery.css';
import WorkSampleImage from '../../Assets/Images/MarketingService/WorkSampleImage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ITEMS_PER_PAGE = 6;

const Gallery = ({Images,AfterShowText }) => {
    const [images , setImages]=useState([]);
    useEffect(()=>{
        setImages(Images)
    },[]);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div className="container CustomContainer">
        <div className="AfterShowText">

            <span className="">{AfterShowText}</span>
            </div>

            <div className="HeaderWorkSamples">
            <span>Work samples</span>
        </div>
      <div className="gallery-container ">
        {selectedImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index}`} className="gallery-image" />
            <div className="hover-effect">
              <img src={image} alt={`Gallery ${index} Hover`} className="hover-image" />
            </div>
          </div>
        ))}
        <div className="pagination">
          <span onClick={handlePrevPage} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              className={index + 1 === currentPage ? 'active' : ''}
              onClick={() => setCurrentPage(index + 1)}
              style={{ cursor: 'pointer' }}
            >
              {index + 1}
            </span>
          ))}
          <span onClick={handleNextPage} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
