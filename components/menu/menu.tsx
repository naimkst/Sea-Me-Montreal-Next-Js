import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Menu = ({ props, data, menuData }: any) => {
  const [value, setValue] = React.useState<any>(false);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  const BelugaLounge = data?.data?.attributes?.BelugaLounge;
  const menuList = menuData;

  return (
    <section className="menu-section">
      <div className="container">
        <div className="menu-wrap">
          <div className="menu-img-wrap">
            {BelugaLounge?.Image?.data?.map((item: any, index: any) => (
              <div key={`BelugaLounge${index}`} className="menu-img-item">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                    item?.attributes?.url ? item?.attributes?.url : ""
                  }`}
                  alt=""
                  width={
                    item?.attributes?.width ? item?.attributes?.width : 100
                  }
                  height={
                    item?.attributes?.height ? item?.attributes?.height : 100
                  }
                />
              </div>
            ))}
          </div>
          <div className="menu-text">
            <div className="section-title-s3">
              <h2>{BelugaLounge?.BelugaTitle}</h2>
            </div>
            <ReactMarkdown>{`${BelugaLounge?.BelugaDescription}`}</ReactMarkdown>

            <div className="menu-text-bottom">
              <div className="section-title">
                <h2>{BelugaLounge?.MenuTitle}</h2>
              </div>
              <ReactMarkdown>{`${BelugaLounge?.MenuDescription}`}</ReactMarkdown>

              <div className="menu-btn">
                <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    className="tab-menu"
                    aria-label="basic tabs example"
                  >
                    {menuList?.data
                      ?.filter(
                        (item: any) =>
                          item?.attributes?.MenuType === "BELUGA LOUNGE"
                      )
                      .map((item: any, index: any) => (
                        <Tab
                          label={item?.attributes?.Title}
                          {...a11yProps(index)}
                        />
                      ))}
                  </Tabs>
                </Box>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-tab-wrap">
          {menuList?.data
            ?.filter(
              (item: any) => item?.attributes?.MenuType === "BELUGA LOUNGE"
            )
            .map((item: any, a: number) => (
              <TabPanel value={value} index={a}>
                <div className="menu-img">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${
                      item?.attributes?.Image?.data?.attributes?.url
                        ? item?.attributes?.Image?.data?.attributes?.url
                        : ""
                    }`}
                    width={
                      item?.attributes?.Image?.data?.attributes?.width
                        ? item?.attributes?.Image?.data?.attributes?.width
                        : 100
                    }
                    height={
                      item?.attributes.Image?.data?.attributes?.height
                        ? item?.attributes?.Image?.data?.attributes?.height
                        : 100
                    }
                    alt=""
                  />
                </div>
              </TabPanel>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
