import Image from "next/image";
import React from "react";
import { Link } from 'react-scroll'
import VideoModal from "../ModalVideo/VideoModal";
import Logo from '/public/images/slider/logo.png'

const Hero = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-xs-12">
                    <div className="hero-section-text">
                        <div className="hero-logo">
                            <Image src={Logo} alt="" />
                        </div>
                        <div className="btns">
                            <Link href="/" className="theme-btn">Réserver</Link>
                            <VideoModal/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;