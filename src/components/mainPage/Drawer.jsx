import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import BrushIcon from '@mui/icons-material/Brush';
import ComputerIcon from '@mui/icons-material/Computer';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FaceIcon from '@mui/icons-material/Face';
import Face3Icon from '@mui/icons-material/Face3';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import ScienceIcon from '@mui/icons-material/Science';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer({setSelectedCategory, electronicSelection, allProducts, setSelectedProducts, groupedProducts, beautySelection, kitchenSelection, womenSelection, sportSelection}) {
    const [open, setOpen] = React.useState(false);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const allSelection = () => {
        setSelectedProducts(allProducts)
        setSelectedCategory('All')
        console.log(allProducts)
    }
    
    // Concating groups
    const vehiclesSelection = () => {
        const vehicles = groupedProducts.vehicle.concat(groupedProducts.motorcycle)
        setSelectedProducts(vehicles)
        setSelectedCategory('Vehicles')
    }
    const groceriesSelection = () => {
        setSelectedProducts(groupedProducts.groceries)
        setSelectedCategory('Groceries')
    }
    const homeSelection = () => {
        const home = groupedProducts.furniture.concat(groupedProducts['home-decoration'])
        setSelectedProducts(home)
        setSelectedCategory('Home')
    }
    const phoneSelection = () => {
        const phone = groupedProducts.smartphones.concat(groupedProducts['mobile-accessories'])
        setSelectedProducts(phone)
        setSelectedCategory('Phone')
    }
    const fragnancesSelection = () => {
        setSelectedProducts(groupedProducts.fragrances)
        setSelectedCategory('Fragrances')
    }
    const menSelection = () => {
        const men = groupedProducts['mens-shirts'].concat(groupedProducts['mens-shoes'], groupedProducts['mens-watches'])
        setSelectedProducts(men)
        setSelectedCategory('Men')
    }

    // Product selection functions

    const DrawerList = (

        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem disablePadding>
                    <Link to={`/`} className='route-btn'>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/feedback`} className='route-btn'>
                        <ListItemButton>
                            <ListItemIcon>
                                <ReplyAllIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Customer Feedback'} />
                        </ListItemButton>
                    </Link >
                </ListItem>
            </List>
            <Divider />
            <List>
                <h3 style={{ textAlign: 'center' }}>Categories</h3>
                <ListItem disablePadding>
                    <Link to={`/products`} className='route-btn'>
                        <ListItemButton onClick={allSelection}>
                            <ListItemIcon>
                                <ClearAllIcon />
                            </ListItemIcon>
                            <ListItemText primary={'All'} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/products`} className='route-btn'>
                        <ListItemButton onClick={beautySelection}>
                            <ListItemIcon >
                                <BrushIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Beauty'} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/products`} className='route-btn'>
                        <ListItemButton onClick={electronicSelection}>
                            <ListItemIcon>
                                <ComputerIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Electronics'} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/products`} className='route-btn'>
                        <ListItemButton onClick={vehiclesSelection}>
                            <ListItemIcon>
                                <DriveEtaIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Vehicles'} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/products`} className='route-btn'>
                        <ListItemButton onClick={groceriesSelection}>
                            <ListItemIcon>
                                <LocalDiningIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Groceries'} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/products`} className='route-btn'>
                        <ListItemButton onClick={homeSelection}>
                            <ListItemIcon>
                                <BedroomParentIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/products`} className='route-btn'>
                        <ListItemButton onClick={sportSelection}>
                            <ListItemIcon>
                                <SportsFootballIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Sport'} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/products`} className='route-btn'>
                        <ListItemButton onClick={phoneSelection}>
                            <ListItemIcon>
                                <PhoneIphoneIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Phone'} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/products`} className='route-btn'>
                        <ListItemButton onClick={fragnancesSelection}>
                            <ListItemIcon>
                                <ScienceIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Fragrances'} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/products`} className='route-btn'>
                        <ListItemButton onClick={kitchenSelection}>
                            <ListItemIcon>
                                <KitchenIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Kitchen'} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/products`} className='route-btn'>
                        <ListItemButton onClick={menSelection}>
                            <ListItemIcon>
                                <FaceIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Men'} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to={`/products`} className='route-btn'>
                        <ListItemButton onClick={womenSelection}>
                            <ListItemIcon>
                                <Face3Icon />
                            </ListItemIcon>
                            <ListItemText primary={'Women'} />
                        </ListItemButton>
                    </Link>
                </ListItem>

            </List>
        </Box>
    );

    return (
        <div className='drawer'>
            <ThemeProvider theme={darkTheme}>
                <Button sx={{ color: '#ffffff', fontWeight: 700 }} onClick={toggleDrawer(true)}>
                    <ViewHeadlineIcon />
                    All
                </Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </ThemeProvider>
        </div>
    );
}