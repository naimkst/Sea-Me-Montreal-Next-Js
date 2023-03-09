import React from "react";
import ContactForm from "../ContactFrom/ContactForm";

const ContactArea = ({ props, data, settings }: any) => {
  const ContactUs = data?.data?.attributes?.ContactUs;
  const Global = settings?.data?.attributes?.Global;
  return (
    <section className="contact-form-area section-padding">
      <div className="container">
        <div className="contact-form-wrap">
          <div className="section-title">
            <h2>{ContactUs?.Title}</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="contact-form">
                <ContactForm Global={Global} />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="contact-info">
                <div className="contact-info-top">
                  <div className="contact-info-item">
                    <p>{Global?.NumberText}</p>
                    <span>{Global?.Phone}</span>
                  </div>
                  <div className="contact-info-item">
                    <p>{Global?.EmailText}</p>
                    <span>{Global?.Email}</span>
                  </div>
                </div>
                <div className="contact-map">
                  <iframe src={ContactUs?.Map} allowFullScreen></iframe>
                </div>

                <div className="contact-info-item">
                  <p>{Global?.AddressText}</p>
                  <span>{Global?.Address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
