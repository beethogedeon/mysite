import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { RiBuilding2Line, RiHeadphoneLine, RiMailLine, RiMailOpenLine } from '@remixicon/react';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        error: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Utilisation d'EmailJS pour envoyer l'e-mail
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
        })
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setFormStatus({ submitted: true, success: true, error: '' });
            setFormData({ name: '', email: '', message: '' });
        }, (error) => {
            console.error('FAILED...', error);
            setFormStatus({ submitted: true, success: false, error: 'Message sending failed. Please, try later !' });
        });
    };

    return (
        <section id="contact" className="contact-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="extra-skills wow fadeInUp delay-0-2s pb-30">
                                <li><i><RiHeadphoneLine size={16} /></i>Phone number : +22966301740</li>
                                <li><i><RiMailOpenLine size={16} /></i>Email : beethovengedeon@gmail.com</li>
                            </ul>
                            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                                <form id="contactForm" className="contactForm" name="contactForm" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Full name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="johndoe@gmail.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    className="form-control"
                                                    rows="4"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Write your message"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-0">
                                                <button type="submit" className="theme-btn">
                                                    Send <i><RiMailLine size={16} /></i>
                                                </button>
                                                {formStatus.submitted && (
                                                    <div id="msgSubmit" className={formStatus.success ? 'success' : 'error'}>
                                                        {formStatus.success ? 'Message sent sucessfully!' : formStatus.error}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;