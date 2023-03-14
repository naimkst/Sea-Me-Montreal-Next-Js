import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/image";
import { Link } from "react-scroll";
import Logo from "/public/images/logo.png";
import NavLink from "next/link";
import Hero from "../hero/hero";
import About from "../about/about";
import Menu from "../menu/menu";
import Corporate from "../Corporate/Corporate";
import Reserver from "../Reserver/Reserver";
import GallerySection from "../Gallery/Gallery";
import ContactArea from "../ContactArea";
import Footer from "../footer/Footer";
import useFetch from "../../hooks/useFetch";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Fullpage = (props) => {
  const [menuActive, setMenuState] = useState < any > false;

  const moveSectionDown = (id) => {
    return fullpage_api.moveTo(id);
  };

  const {
    loading: settingsLoading,
    error: settingsError,
    data: settings,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/global-settiing?populate=deep&locale=${lngData}`
  );

  const Global = settings?.data?.attributes?.Global;
  return (
    <>
      <header id="header">
        <div className={`site-header ${props.hclass}`}>
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <div>
                      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                        <div className="menu-close">
                          <div
                            className="clox"
                            onClick={() => setMenuState(!menuActive)}
                          >
                            <i className="ti-close"></i>
                          </div>
                        </div>
                        <ul className="responsivemenu">
                          <li>
                            <Link
                              href="/home"
                              onClick={() => moveSectionDown(2)}
                            >
                              À PROPOS
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/home"
                              onClick={() => moveSectionDown(3)}
                            >
                              RESTAURANT
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/home"
                              onClick={() => moveSectionDown(4)}
                            >
                              LOUNGE
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/home"
                              onClick={() => moveSectionDown(5)}
                            >
                              CORPORATIF
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/home"
                              onClick={() => moveSectionDown(7)}
                            >
                              CONTACT
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div
                        className="showmenu"
                        onClick={() => setMenuState(!menuActive)}
                      >
                        <button
                          type="button"
                          className="navbar-toggler open-btn"
                        >
                          <span className="icon-bar first-angle"></span>
                          <span className="icon-bar middle-angle"></span>
                          <span className="icon-bar last-angle"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <NavLink
                      onClick={ClickHandler}
                      className="navbar-brand"
                      href="/"
                    >
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                          Global?.Logo?.data?.attributes?.url
                            ? Global?.Logo?.data?.attributes?.url
                            : ""
                        }`}
                        alt=""
                        // width={1920}
                        // height={1080}
                      />
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li>
                        <Link href="/home" onClick={() => moveSectionDown(2)}>
                          À PROPOS
                        </Link>
                      </li>
                      <li>
                        <Link href="/home" onClick={() => moveSectionDown(3)}>
                          RESTAURANT
                        </Link>
                      </li>
                      <li>
                        <Link href="/home" onClick={() => moveSectionDown(4)}>
                          LOUNGE
                        </Link>
                      </li>
                      <li>
                        <Link href="/home" onClick={() => moveSectionDown(5)}>
                          CORPORATIF
                        </Link>
                      </li>

                      <li>
                        <Link href="/home" onClick={() => moveSectionDown(7)}>
                          CONTACT
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-2">
                  <div className="header-right" id="home">
                    <div className="language">
                      <select name="" id="">
                        <option value="fr">FR</option>
                        <option value="en">EN</option>
                      </select>
                    </div>
                    <div className="btn">
                      <Link href="/home" className="theme-btn">
                        Réserver
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={600} /* Options here */
        navigation
        navigationTooltips={[
          "HOME",
          "À PROPOS",
          "LOUNGE",
          "CORPORATIF",
          "CONTACT",
        ]}
        showActiveTooltip={true}
        render={({ fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section hero-section">
                  <Hero />
                  <div className="arrow-btn">
                    <Link href="/home" onClick={() => fullpageApi?.moveTo(2)}>
                      <i className="ti-angle-down"></i>
                    </Link>
                  </div>
                </div>
                <div className="section">
                  <About />
                  <div className="see-menu">
                    <div className="section-title-s2">
                      <h2>MENU SEA-ME</h2>
                      <div className="arrow-btn">
                        <Link
                          href="/home"
                          onClick={() => fullpageApi.moveTo(3)}
                        >
                          <i className="ti-angle-down"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <Menu />
                </div>
                <div className="section">
                  <Corporate />
                </div>
                <div className="section">
                  <Reserver />
                </div>
                <div className="section">
                  <GallerySection />
                </div>
                <div className="section">
                  <ContactArea />
                  <Footer />
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </>
  );
};

export default Fullpage;
