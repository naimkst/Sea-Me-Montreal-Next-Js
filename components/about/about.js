import Image from 'next/image';
import React from 'react'
import aImg from '/public/images/about/img-1.jpg'

const About = (props) => {
    return (

        <section className="about-section section-padding">
            <div className="container">
                <div className="about-wrap">
                    <div className="about-text">
                        <div className="section-title">
                            <h2>À PROPOS</h2>
                        </div>
                        <p>Situé au cœur du centre-ville de Montréal, le restaurant SEA ME vous invite à découvrir une fine cuisine italienne inspirée de la mer, dans un établissement moderne et sophistiqué.</p>
                        <p>Nos menus reflètent la créativité et la singularité de notre chef Gianfranco Schifano et de son équipe. Laissez-vous tenter par ses créations, préparées dans notre dynamique cuisine ouverte à partir de laquelle vous pouvez voir nos cuisiniers à l'œuvre.</p>
                        <p>Avant ou après un repas à la surface, oserez-vous vous immerger dans notre Beluga Lounge et déguster l’un de nos cocktails signature ?</p>
                        <p className='mb-0'>SEA ME offre une expérience unique et intime à ceux qui osent s’immerger.</p>
                    </div>
                    <div className="about-img">
                        <Image src={aImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;