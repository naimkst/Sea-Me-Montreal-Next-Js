import React, { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/image";
import { Link } from "react-scroll";
import Logo from "/public/images/logo.png";
import NavLink from "next/link";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Menu from "../components/menu/menu";
import Corporate from "../components/Corporate/Corporate";
import Reserver from "../components/Reserver/Reserver";
import GallerySection from "../components/Gallery/Gallery";
import ContactArea from "../components/ContactArea";
import Footer from "../components/footer/Footer";
import MenuTabs from "../components/MenuTab/MenuTab";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useFetch from "../hooks/useFetch";
import { getLocalStorageData } from "../helper/globalFunction";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Fullpage = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [tabActive, setTabState] = useState(false);
  const [language, setLanguage] = React.useState("fr");

  const lngData = getLocalStorageData("lan");

  const moveSectionDown = (id) => {
    return fullpage_api.moveTo(id);
  };

  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/home-page?populate=deep&locale=${lngData}`
  );

  const {
    loading: settingsLoading,
    error: settingsError,
    data: settings,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/global-settiing?populate=deep&locale=${lngData}`
  );

  const {
    loading: menuLoading,
    error: menuError,
    data: menuData,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/see-menus?populate=deep&locale=${lngData}`
  );
  const SeeMeSection = data?.data?.attributes?.SeeMeSection;

  const handleChange = (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lan", JSON.stringify(event.target.value));
  };

  const Global = settings?.data?.attributes?.Global;


  useEffect(() => {
    setLanguage(lngData);
  }, [lngData]);

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
                            <Link href="/" onClick={() => moveSectionDown(2)}>
                              À PROPOS
                            </Link>
                          </li>
                          <li>
                            <Link href="/" onClick={() => moveSectionDown(3)}>
                              LOUNGE
                            </Link>
                          </li>
                          <li>
                            <Link href="/" onClick={() => moveSectionDown(4)}>
                              CORPORATIF
                            </Link>
                          </li>
                          <li>
                            <Link href="/" onClick={() => moveSectionDown(6)}>
                              GALERIE
                            </Link>
                          </li>
                          <li>
                            <Link href="/" onClick={() => moveSectionDown(7)}>
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
                      <Image src={Logo} alt="" />
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
                        <Link href="/" onClick={() => moveSectionDown(2)}>
                          À PROPOS
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={() => moveSectionDown(3)}>
                          LOUNGE
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={() => moveSectionDown(4)}>
                          CORPORATIF
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={() => moveSectionDown(6)}>
                          GALERIE
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={() => moveSectionDown(7)}>
                          CONTACT
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-2">
                  <div className="header-right" id="home">
                    <div className="language">
                      <FormControl>
                        <Select
                          value={language}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="fr">
                            <span>FR</span>
                          </MenuItem>
                          <MenuItem value={"en"}>EN</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="btn">
                      <Link
                        href={String(Global?.ReserverButtonLink)}
                        className="theme-btn"
                      >
                        {Global?.ReserverButtonText}
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
        scrollingSpeed={1000} /* Options here */
        navigation
        navigationTooltips={[
          "HOME",
          "À PROPOS",
          "LOUNGE",
          "CORPORATIF",
          "RÉSERVATION",
          "GALERIE",
          "CONTACT",
        ]}
        showActiveTooltip={true}
        render={({ fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section hero-section">
                  <Hero data={data} />
                  <div className="arrow-btn">
                    <Link href="/" onClick={() => fullpageApi.moveTo(2)}>
                      <i className="ti-angle-down"></i>
                    </Link>
                  </div>
                </div>
                <div className="section">
                  <About data={data} />
                  <div className="see-menu">
                    <div className="section-title-s2">
                      <h2>{SeeMeSection?.Title}</h2>
                      <div className="arrow-btn">
                        <button onClick={() => setTabState(!tabActive)}>
                          <i
                            className={`fi ${
                              tabActive ? "ti-angle-up" : "fi ti-angle-down"
                            }`}
                          ></i>
                        </button>
                      </div>
                      <div className={`menu-tabs ${tabActive ? "show" : ""}`}>
                        <MenuTabs data={menuData} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <Menu data={data} menuData={menuData} />
                </div>
                <div className="section">
                  <Corporate data={data} />
                </div>
                <div className="section">
                  <Reserver data={data} />
                </div>
                <div className="section">
                  <GallerySection data={data} />
                </div>
                <div className="section">
                  <ContactArea data={data} settings={settings} />
                  <Footer settings={settings} />
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
