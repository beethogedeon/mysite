import React from 'react'
//import {profile} from "../../../assets/images/about/me.jpg";

const Summary = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row align-items-center">
                        {/* START ABOUT IMAGE DESIGN AREA */}
                        <div className="col-lg-5">
                            <div className="about-image-part wow fadeInUp delay-0-3s">
                                <img src="./about/me.jpg" alt="Gedeon GBEDONOU" />
                            </div>
                        </div>
                        {/* END ABOUT IMAGE DESIGN AREA */}
                        {/* START ABOUT TEXT DESIGN AREA */}
                        <div className="col-lg-7">
                            <div className="about-content-part wow fadeInUp delay-0-5s">
                                <h2>
                                    A passionate <span>AI & Software Engineer</span> transforming <span>ideas</span> into innovative tech solutions.
                                </h2>
                                <p>
                                    Hello! I'm Gedeon, a dedicated AI & Software Engineer with a strong foundation in computer science and a specialization in artificial intelligence. My journey in tech began during my studies and has evolved through various projects and professional experiences.
                                </p>
                                <p>
                                    I'm committed to leveraging cutting-edge innovations, particularly in AI, to address pressing challenges and unlock potential, especially in the African context. My expertise spans machine learning, computer vision, and NLP, allowing me to develop sophisticated solutions from chatbots to complex AI systems.
                                </p>
                                <p>
                                    With experience in both freelance and corporate environments, I bring a versatile skill set to every project. I'm passionate about continuous learning and staying at the forefront of technological advancements to deliver exceptional results.
                                </p>
                            </div>
                        </div>
                        {/* END ABOUT TEXT DESIGN AREA */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summary;