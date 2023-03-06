import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import glImg1 from '/public/images/menu-1.jpg'
import Image from 'next/image';



function TabPanel(props) {
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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const MenuTabs = (props) => {

    const [value, setValue] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col col-xs-12">
                    <div className="menu-info">
                        <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} className="tab-menu" aria-label="basic tabs example">
                                <Tab label="Dinner" {...a11yProps(0)} />
                                <Tab label="wine" {...a11yProps(1)} />
                                <Tab label="Cocktails" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <div className="menu-img">
                                <Image src={glImg1} alt="" />
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Image src={glImg1} alt="" />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Image src={glImg1} alt="" />
                        </TabPanel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuTabs;