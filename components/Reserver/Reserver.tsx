import React from "react";
import Link from "next/link";

const Reserver = ({ props, data }: any) => {
  const ReservationSection = data?.data?.attributes?.ReservationSection;

  return (
    <section className="reserver-section section-padding">
      <div className="container">
        <div className="reserver-wrap">
          <div className="section-title">
            <h2>{ReservationSection?.Title}</h2>
          </div>
          <div className="reserve-btn">
            <Link
              href={String(ReservationSection?.ButtonLink)}
              className="theme-btn-s3"
            >
              {ReservationSection?.ButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserver;
