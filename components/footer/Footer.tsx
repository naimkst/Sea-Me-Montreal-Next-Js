import React from "react";
import Link from "next/link";
import Logo from "/public/images/logo-2.png";
import Image from "next/image";

const Footer = ({ props, settings }: any) => {
  const Global = settings?.data?.attributes?.Global;

  return (
    <div className="site-footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-image">
              <Link className="logo" href="/">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                    Global?.FooterLogo?.data?.attributes?.url
                      ? Global?.FooterLogo?.data?.attributes?.url
                      : ""
                  }`}
                  alt=""
                  width={
                    Global?.FooterLogo?.data?.attributes?.width
                      ? Global?.FooterLogo?.data?.attributes?.width
                      : 100
                  }
                  height={
                    Global?.FooterLogo?.data?.attributes?.height
                      ? Global?.FooterLogo?.data?.attributes?.height
                      : 100
                  }
                />
              </Link>
            </div>
          </div>
          <div className="col-12">
            <div className="copyright">
              <p>{Global?.CopyRightText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
