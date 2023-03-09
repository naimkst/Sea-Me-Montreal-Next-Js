import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import glImg1 from "/public/images/gallery/img-1.jpg";
import glImg2 from "/public/images/gallery/img-2.jpg";
import glImg3 from "/public/images/gallery/img-3.jpg";
import glImg4 from "/public/images/gallery/img-4.jpg";
import glImg5 from "/public/images/gallery/img-5.jpg";
import Image from "next/image";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Gallerys = [
  {
    id: "1",
    GlImg: glImg1,
  },
  {
    id: "2",
    GlImg: glImg2,
  },
  {
    id: "3",
    GlImg: glImg3,
  },
  {
    id: "4",
    GlImg: glImg4,
  },
  {
    id: "5",
    GlImg: glImg5,
  },
];

const GallerySection = ({ data, setting }: any) => {
  var settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const GallerySection = data?.data?.attributes?.GallerySection;
  const InstagramSection = data?.data?.attributes?.InstagramSection;
  const Global = setting?.data?.attributes?.Global;

  return (
    <section className="gallery-section section-padding">
      <div className="container">
        <div className="section-title">
          <ReactMarkdown>{`${GallerySection?.Title}`}</ReactMarkdown>
        </div>

        <div className="gallery-wrap">
          <Slider {...settings}>
            {GallerySection?.Image?.data.map((gallery: any, Glry: number) => (
              <div className="gallery-item" key={Glry}>
                <div className="gallery-img">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                      gallery?.attributes?.url ? gallery?.attributes?.url : ""
                    }`}
                    alt=""
                    width={
                      gallery?.attributes?.width
                        ? gallery?.attributes?.width
                        : 100
                    }
                    height={
                      gallery?.attributes?.height
                        ? gallery?.attributes?.height
                        : 100
                    }
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="section-title-s3 instagram-title">
          <ReactMarkdown className="instagram-title">{`${InstagramSection?.Title}`}</ReactMarkdown>
        </div>
        <div className="instagram">
          <Link href={String(InstagramSection?.InstagramLink)}>
            <i className="ti-instagram"></i>{" "}
            <span> {Global?.FollowUsHere} </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
