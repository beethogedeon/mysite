import React, { useState } from 'react'
import workScribble from "../../assets/images/custom/work-scribble.svg"
import { galleryData } from '../../utlits/fackData/galleryData'
import ImageSlider from '../ui/imageSlider';
import { Link } from 'react-router-dom';

const Gallery = () => {
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
                
                <div className="container-fluid">
                    <div className="custom-icon">
                        <img src={workScribble} alt="custom" />
                    </div>
                    <div className="row g-4 portfolio-grid">
                        {galleryData.map(({ category, id, size, link, src, title }, index) => {
                            return (
                                <div key={id} className={`${size === "large" ? "col-md-6 col-xl-6" : "col-md-6 col-xl-4"} portfolio-item category-${id}`}>
                                    <div className="work-popup">
                                        <div className="portfolio-box">
                                            <img src={src} alt="" style={{height:"auto", width:"auto", minHeight:"300px",
                                            }} data-rjs="2" />
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
            <ImageSlider images={galleryData} isOpen={isOpen} onClose={closeSlider} currentIndex={currentIndex} />
        </>
    )
}

export default Gallery

