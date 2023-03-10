import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import glImg1 from '/public/images/gallery/img-1.jpg'
import glImg2 from '/public/images/gallery/img-2.jpg'
import glImg3 from '/public/images/gallery/img-3.jpg'
import glImg4 from '/public/images/gallery/img-4.jpg'
import glImg5 from '/public/images/gallery/img-5.jpg'
import Image from "next/image";
import Link from 'next/link'



const Gallerys = [
    {
        id:"1",
        GlImg:glImg1,
    },
    {
        id:"2",
        GlImg:glImg2,
    },
    {
        id:"3",
        GlImg:glImg3,
    },
    {
        id:"4",
        GlImg:glImg4,
    },
    {
        id:"5",
        GlImg:glImg5,
    },
]



const GallerySection = () => {

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
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className="gallery-section section-padding">
            <div className="container">
                <div className="section-title">
                    <h2>GALERIE</h2>
                </div>

                <div className="gallery-wrap">
                    <Slider {...settings}>
                        {Gallerys.map((gallery, Glry) => (
                            <div className="gallery-item" key={Glry}>
                                <div className="gallery-img">
                                    <Image src={gallery.GlImg} alt="" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="section-title-s3">
                    <h2>SUIVEZ-NOUS SUR INSTAGRAM</h2>
                </div>
                <div className="instagram">
                    <Link href="/"><i className="ti-instagram"></i> <span> Follow us here </span></Link>
                </div>
            </div>
        </section>
    )
}

export default GallerySection;