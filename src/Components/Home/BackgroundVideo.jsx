
import React from 'react';
import './BackgroundVideo.css';
import sampleVideo from '../../Assets/Images/BackVide2.mp4'; 
import ServicesSection from './ServicesSection';

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="FirstSectionHeader">
            <span className='Integrated'>Integrated Creative</span>
            <h1 className='Solutions'>Solutions</h1>

        </div>
        <span className='WeStrive'>We strive to deliver exceptional customer experiences by seamlessly integrating creative and technical aspects into our solutions.</span>
        <div className="FindMoreBtn">
            <button className='btn'>Find out more</button>
        </div>
      </div>
      <div className="VideoCurve">
        
      </div>
    </div>
  );
};

export default BackgroundVideo;
