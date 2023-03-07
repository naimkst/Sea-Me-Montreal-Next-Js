import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import glImg1 from "/public/images/menu-1.jpg";
import Image from "next/image";
import useFetch from "../../hooks/useFetch";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MenuTabs = ({ props, data }: any) => {
  const [value, setValue] = React.useState<any>(false);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  const menuList = data;

  return (
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <div className="menu-info">
            <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                className="tab-menu"
                aria-label="basic tabs example"
              >
                {menuList?.data
                  ?.filter(
                    (item: any) => item?.attributes?.MenuType === "SEA ME MENU"
                  )
                  .map((item: any, index: any) => (
                    <Tab
                      label={item?.attributes?.Title}
                      {...a11yProps(index)}
                    />
                  ))}

                {/* <Tab label="wine" {...a11yProps(1)} />
                <Tab label="Cocktails" {...a11yProps(2)} /> */}
              </Tabs>
            </Box>
            {menuList?.data
              ?.filter(
                (item: any) => item?.attributes?.MenuType === "SEA ME MENU"
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
      </div>
    </div>
  );
};

export default MenuTabs;
