import React from "react";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Reserver = ({ props, data }: any) => {
  const ReservationSection = data?.data?.attributes?.ReservationSection;

  return (
    <section className="reserver-section section-padding">
      <div className="container">
        <div className="reserver-wrap">
          <div className="section-title">
            <ReactMarkdown>{`${ReservationSection?.Title}`}</ReactMarkdown>
          </div>
          <div className="reserve-btn">
            <Link
              href={String(ReservationSection?.ButtonLink)}
              className="theme-btn-s3"
            >
              {ReservationSection?.ButtonText}
            </Link>
          </div>
          <div className="notediv">
            <ReactMarkdown className="note">{`${ReservationSection?.Note}`}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserver;
