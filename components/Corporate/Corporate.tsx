import Image from "next/image";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Corporate = ({ props, data, moveSectionDown }: any) => {
  const CorporateSection = data?.data?.attributes?.CorporateSection;

  return (
    <section className="corporate-section section-padding">
      <div className="container">
        <div className="corporate-wrap">
          <div className="corporate-text">
            <div className="section-title">
              <ReactMarkdown>{`${CorporateSection?.Title}`}</ReactMarkdown>
            </div>
            <ReactMarkdown>{`${CorporateSection?.Description}`}</ReactMarkdown>
            <div className="corporate-btn">
              <a onClick={moveSectionDown} href="#" className="theme-btn-s2">
                {CorporateSection?.ButtonText}
              </a>
            </div>
          </div>
          <div className="corporate-img">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                CorporateSection?.Image?.data?.attributes?.url
                  ? CorporateSection?.Image?.data?.attributes?.url
                  : ""
              }`}
              width={
                CorporateSection?.Image?.data?.attributes?.width
                  ? CorporateSection?.Image?.data?.attributes?.width
                  : 100
              }
              height={
                CorporateSection?.Image?.data?.attributes?.height
                  ? CorporateSection?.Image?.data?.attributes?.height
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

export default Corporate;
