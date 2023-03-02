import Image from 'next/image';
import React from 'react'
import aImg1 from '/public/images/menu/img-1.jpg'
import aImg2 from '/public/images/menu/img-2.jpg'
import aImg3 from '/public/images/menu/img-3.jpg'
import aImg4 from '/public/images/menu/img-4.jpg'
import Link from 'next/link'

const Menu = (props) => {
    return (
        <section className="menu-section">
            <div className="container">
                <div className="menu-wrap">
                    <div className="menu-img-wrap">
                        <div className="menu-img-item">
                            <Image src={aImg1} alt="" />
                        </div>
                        <div className="menu-img-item">
                            <Image src={aImg2} alt="" />
                        </div>
                        <div className="menu-img-item">
                            <Image src={aImg3} alt="" />
                        </div>
                        <div className="menu-img-item">
                            <Image src={aImg4} alt="" />
                        </div>
                    </div>
                    <div className="menu-text">
                        <div className="section-title-s3">
                            <h2>BELUGA LOUNGE</h2>
                        </div>
                        <p>Adipiscing commodo nec tempus pretium tristique nec. Placerat nunc tempus arcu nunc donec sed ut. Porta proin viverra non nam ut quis urna. Ultricies interdum vitae posuere sit vel. Maecenas sodales pellentesque risus a congue id arcu fringilla. Neque sagittis ornare vestibulum id aliquam elit nibh eu feugiat. </p>

                        <div className="menu-text-bottom">
                            <div className="section-title">
                                <h2>Menu</h2>
                            </div>
                            <p>Egestas sagittis metus turpis vel. Dapibus diam auctor sapien rhoncus eu. Sed diam etiam leo velit pulvinar sed.</p>
                            <div className="menu-btn">
                                <Link href="/" className="theme-btn-s2">Desserts</Link>
                                <Link href="/" className="theme-btn-s2">Cocktails</Link>
                                <Link href="/" className="theme-btn-s2">Wine</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu;