import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import VideoModal from "../ModalVideo/VideoModal";
import Logo from "/public/images/slider/logo.png";

const Hero = ({ data }: any) => {
  const heroSection = data?.data?.attributes?.HeroSection;
  return (
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <div className="hero-section-text">
            <div className="hero-logo">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                  heroSection?.HeroLogo?.data?.attributes?.url
                    ? heroSection?.HeroLogo?.data?.attributes?.url
                    : ""
                }`}
                alt=""
                width={
                  heroSection?.HeroLogo?.data?.attributes?.width
                    ? heroSection?.HeroLogo?.data?.attributes?.width
                    : 100
                }
                height={
                  heroSection?.HeroLogo?.data?.attributes?.height
                    ? heroSection?.HeroLogo?.data?.attributes?.height
                    : 100
                }
              />
            </div>
            <div className="btns">
              <Link
                href={String(heroSection?.BookButtonLink)}
                className="theme-btn"
              >
                {heroSection?.BookButtonText}
              </Link>
              <VideoModal videoLink={heroSection?.YoutubeVideoId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;