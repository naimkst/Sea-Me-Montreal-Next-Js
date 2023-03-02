import Image from 'next/image';
import React from 'react'
import cImg from '/public/images/corporate.jpg'

const Corporate = (props) => {
    return (

        <section className="corporate-section section-padding">
            <div className="container">
                <div className="corporate-wrap">
                    <div className="corporate-text">
                        <div className="section-title">
                            <h2>CORPORATIF</h2>
                        </div>
                        <p>FR/  Avec un capacité total de …… personnes, SEA ME et son Beluga Lounge vous propose un forfait pour événements corporatif, dans l’un ou les deux de nos établissements. Le cadre intimiste et confortable que nous offrons est parfait pour une célébration professionnelle entre collègues.</p>
                        <p>Pour toute demande d’informations supplémentaire veuillez nous contactez à l’adresse courriel suivante : info@sea-me.com ou en utilisant notre section « contactez » via le formulaire.</p>
                    </div>
                    <div className="corporate-img">
                        <Image src={cImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Corporate;