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
import OutsideClickHandler from "react-outside-click-handler";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Fullpage = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [tabActive, setTabState] = useState(false);
  const [language, setLanguage] = React.useState("fr");
  const [showNav, setShowNav] = useState(false);

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
  const navigation = settings?.data?.attributes?.Navigation;

  useEffect(() => {
    if (lngData) {
      setLanguage(lngData);
    } else {
      localStorage.setItem("lan", JSON.stringify("en"));
      setLanguage("en");
    }
  }, [lngData]);

  const linkTo = (id) => {
    document.location = id;
  };

  useEffect(() => {
    setTimeout(() => {
      setShowNav(true);
    }, 1000);
  }, [showNav]);

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
                        <OutsideClickHandler
                          onOutsideClick={() => {
                            setMenuState(false);
                          }}
                        >
                          <div className="menu-close">
                            <div
                              className="clox"
                              onClick={() => setMenuState(!menuActive)}
                            >
                              <i className="ti-close"></i>
                            </div>
                          </div>
                          <ul className="responsivemenu">
                            {/* <li>
                            <Link href="/" onClick={() => moveSectionDown(1)}>
                              {navigation?.Home}
                            </Link>
                          </li> */}
                            <li>
                              <Link
                                href="/"
                                onClick={() => {
                                  moveSectionDown(2);
                                  setMenuState(!menuActive);
                                }}
                              >
                                {navigation?.AboutUs}
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/"
                                onClick={() => {
                                  moveSectionDown(3);
                                  setMenuState(!menuActive);
                                }}
                              >
                                {navigation?.Restaurant}
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/"
                                onClick={() => {
                                  moveSectionDown(4);
                                  setMenuState(!menuActive);
                                }}
                              >
                                {navigation?.Lounge}
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/"
                                onClick={() => {
                                  moveSectionDown(5);
                                  setMenuState(!menuActive);
                                }}
                              >
                                {navigation?.Corporate}
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/"
                                onClick={() => {
                                  moveSectionDown(8);
                                  setMenuState(!menuActive);
                                }}
                              >
                                {navigation?.Contact}
                              </Link>
                            </li>
                          </ul>
                          <div className="btn">
                            <Link
                              onClick={() => linkTo(Global?.ReserverButtonLink)}
                              href={String(Global?.ReserverButtonLink)}
                              className="theme-btn"
                            >
                              {Global?.ReserverButtonText}
                            </Link>
                          </div>
                        </OutsideClickHandler>
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
                      />
                      {/* <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                          Global?.Logo?.data?.attributes?.url
                            ? Global?.Logo?.data?.attributes?.url
                            : ""
                        }`}
                        alt=""
                        width={1920}
                        height={1080}
                      /> */}
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
                      {/* <li>
                        <Link href="/" onClick={() => moveSectionDown(1)}>
                          {navigation?.Home}
                        </Link>
                      </li> */}
                      <li>
                        <Link href="/" onClick={() => moveSectionDown(2)}>
                          {navigation?.AboutUs}
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={() => moveSectionDown(3)}>
                          {navigation?.Restaurant}
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={() => moveSectionDown(4)}>
                          {navigation?.Lounge}
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={() => moveSectionDown(5)}>
                          {navigation?.Corporate}
                        </Link>
                      </li>

                      <li>
                        <Link href="/" onClick={() => moveSectionDown(8)}>
                          {navigation?.Contact}
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
                        onClick={() => linkTo(Global?.ReserverButtonLink)}
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

      {showNav && (
        <ReactFullpage
          //fullpage options
          licenseKey={"YOUR_KEY_HERE"}
          scrollingSpeed={500} /* Options here */
          navigation
          navigationTooltips={[
            navigation?.Home,
            navigation?.AboutUs,
            navigation?.Restaurant,
            navigation?.Lounge,
            navigation?.Corporate,
            navigation?.Contact,
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
                  </div>
                  <div className="section see-menu">
                    <div className="">
                      <div className="section-title-s2">
                        <ReactMarkdown>{`${SeeMeSection?.Title}`}</ReactMarkdown>

                        <OutsideClickHandler
                          onOutsideClick={() => {
                            setTabState(false);
                          }}
                        >
                          <div className="arrow-btn">
                            <Link
                              href="/"
                              onClick={() => setTabState(!tabActive)}
                            >
                              {tabActive ? (
                                <i className="ti-angle-up"></i>
                              ) : (
                                <i className="ti-angle-down"></i>
                              )}
                            </Link>
                          </div>

                          <div
                            className={`menu-tabs ${tabActive ? "show" : ""}`}
                          >
                            <MenuTabs data={menuData} />
                          </div>
                        </OutsideClickHandler>
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <Menu data={data} menuData={menuData} />
                  </div>
                  <div className="section">
                    <Corporate
                      data={data}
                      moveSectionDown={() => moveSectionDown(8)}
                    />
                  </div>
                  <div className="section">
                    <Reserver data={data} />
                  </div>
                  <div className="section">
                    <GallerySection data={data} setting={settings} />
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
      )}
    </>
  );
};

export default Fullpage;
