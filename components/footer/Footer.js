import React from 'react'
import Link from 'next/link'
import Logo from '/public/images/logo-2.png'
import Image from 'next/image'

const Footer = (props) => {
    return (
        <div className="site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-image">
                            <Link className="logo" href="/"><Image src={Logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>© 2023 All rights Reserved. Powered by Sea Me</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;