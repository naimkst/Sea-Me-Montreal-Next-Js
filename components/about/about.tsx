import Image from "next/image";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import aImg from "/public/images/about/img-1.jpg";

const About = ({ props, data }: any) => {
  const RegardsSection = data?.data?.attributes?.RegardsSection;
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="about-wrap">
          <div className="about-text">
            <div className="section-title">
              <h2>{RegardsSection?.Title}</h2>
            </div>
            <ReactMarkdown>{`${RegardsSection?.Description}`}</ReactMarkdown>
          </div>
          <div className="about-img">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                RegardsSection?.Image?.data?.attributes?.url
                  ? RegardsSection?.Image?.data?.attributes?.url
                  : ""
              }`}
              width={
                RegardsSection?.Image?.data?.attributes?.width
                  ? RegardsSection?.Image?.data?.attributes?.width
                  : 100
              }
              height={
                RegardsSection?.Image?.data?.attributes?.height
                  ? RegardsSection?.Image?.data?.attributes?.height
                  : 100
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
