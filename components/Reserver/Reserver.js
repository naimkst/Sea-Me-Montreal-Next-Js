import React from 'react'
import Link from 'next/link'

const Reserver = (props) => {
    return (

        <section className="reserver-section section-padding">
            <div className="container">
                <div className="reserver-wrap">
                    <div className="section-title">
                        <h2>RÉSERVATION</h2>
                    </div>
                    <div className="reserve-btn">
                        <Link href="/" className="theme-btn-s3">Réserver</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reserver;