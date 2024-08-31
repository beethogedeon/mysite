import React, { useState } from 'react'
import workScribble from "../../assets/images/custom/work-scribble.svg"
import { projectsData } from '../../utlits/fackData/projectData'
import ImageSlider from '../ui/imageSlider';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openSlider = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeSlider = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="projects-area" id="portfolio">
                
                <div className="container">
                <div className="custom-icon">
                    <img src={workScribble} alt="custom" />
                </div>
                    <div className="row g-4 portfolio-grid">
                        {projectsData.map(({ category, id, size, link, src, title }, index) => {
                            return (
                                <div key={id} className={`${size === "large" ? "col-md-6 col-xl-6" : "col-md-6 col-xl-4"} portfolio-item category-${id}`}>
                                    <div className="work-popup">
                                        <div onClick={() => openSlider(index)} className="portfolio-box">
                                        <img src={src} alt="" data-rjs="2" className="grayscale-img" />
                                            <span className="portfolio-category">{category}</span>
                                            <h1 className="portfolio-caption"><Link to={link} target='_blank' >{title}</Link></h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <ImageSlider images={projectsData} isOpen={isOpen} onClose={closeSlider} currentIndex={currentIndex} />
        </>
    )
}

export default Portfolio

