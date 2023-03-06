import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import glImg1 from '/public/images/menu-1.jpg'
import Image from 'next/image';
import aImg1 from '/public/images/menu/img-1.jpg'
import aImg2 from '/public/images/menu/img-2.jpg'
import aImg3 from '/public/images/menu/img-3.jpg'
import aImg4 from '/public/images/menu/img-4.jpg'
import Link from 'next/link'


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


const Menu = (props) => {

    const [value, setValue] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


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
                                <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} className="tab-menu" aria-label="basic tabs example">
                                        <Tab label="Desserts" {...a11yProps(0)} />
                                        <Tab label="Cocktails" {...a11yProps(1)} />
                                        <Tab label="Wine" {...a11yProps(2)} />
                                    </Tabs>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-tab-wrap">
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
        </section>
    )
}

export default Menu;