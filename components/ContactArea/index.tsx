import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'


const ContactArea = (props: any) => {
    return (
        <section className="contact-form-area section-padding">
            <div className="container">
                <div className="contact-form-wrap">
                    <div className="section-title">
                        <h2>CONTACTEZ-NOUS</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="contact-form">
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="contact-info">
                                <div className="contact-info-top">
                                    <div className="contact-info-item">
                                        <p>Numéro de cellulaire:</p>
                                        <span>443 410 4778 ext 4778</span>
                                    </div>
                                    <div className="contact-info-item">
                                        <p>Courriel:</p>
                                        <span>reidselitetransportation@gmail.com</span>
                                    </div>
                                </div>
                                <div className="contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                                        allowFullScreen></iframe>
                                </div>

                                <div className="contact-info-item">
                                    <p>Adresse:</p>
                                    <span>8310 Montgomery Village Ave Ste 300 #1004 Gaithersburg, MD 20879</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactArea;