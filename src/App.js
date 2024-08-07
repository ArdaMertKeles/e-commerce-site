import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import './styles.css'
import logo from './img/commerceLogo.png'
import pcDiscount from './img/pc.png'
import TemporaryDrawer from "./components/mainPage/Drawer";
import FullWidthTextField from "./components/mainPage/SearchBar";
import MyBasket from "./components/mainPage/MyBasket";
import PopularProducts from "./components/mainPage/PopularProducts";
import PopularCategories from "./components/mainPage/PopularCategories";
import Slider from "react-slick";
import TopCategories from "./components/mainPage/TopCategories";
import ExplorePopulars from "./components/mainPage/ExplorePopulars";
import FurnitureBoard from "./components/mainPage/FurnitureBoard";
import Footer from "./components/mainPage/Footer";
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FeedBack from "./components/feedbackPage/Feedback";
// Product Lister
import Header from "./components/productsPage/Header";
import ProductLister from "./components/productsPage/ProductLister";
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  const [products, setProducts] = useState([])
  const [groupedProducts, setGroupedProducts] = useState();
  const [popularCategories, setPopularCategories] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [page, setPage] = useState(1)

  // Categories
  const all = 'all'
  const beauty = 'beauty'
  const electronics = 'electronics'
  const vehicles = 'vehicles'
  const groceries = 'groceries'
  const home = 'home'
  const sport = 'sport'
  const phone = 'phone'
  const fragrances = 'fragrances'
  const kitchen = 'kitchen'
  const men = 'men'
  const women = 'women'

  const electronicsDescription = 'Are you ready to upgrade your tech game? Explore our vast selection of cutting-edge electronics designed to enhance your lifestyle. From state-of-the-art smartphones to powerful laptops, our collection has everything you need to stay connected and productive.'
  const beautyDescription = 'Discover the perfect blend of beauty and confidence with our premium makeup products. Whether you’re looking for a subtle everyday look or a glamorous transformation, our extensive range of makeup essentials has got you covered.'
  const furnitureDescription = 'Create the home of your dreams with our exquisite range of furniture. From modern designs to timeless classics, our collection offers the perfect pieces to suit every style and space.'

  const fetchingData = async () => {
    const productsData = await axios.get('https://dummyjson.com/products?limit=0')
    setProducts(productsData.data.products)
    setAllProducts(productsData.data.products)
  }

  useEffect(() => {
    fetchingData()

  }, [])

  // Slider
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  // Fade Slider
  const fadeSettings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000
  };

  // Group datas by catogeries
  useEffect(() => {
    const groupByCategory = () => {
      const grouped = products.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
      }, {});
      setGroupedProducts(grouped);
      console.log(grouped)
      if (groupedProducts) { // Setting all products by categories
        setPopularCategories([grouped.laptops[0], grouped.furniture[3], grouped.smartphones[2], grouped.fragrances[2], grouped.tops[2]])
      }
    };
    groupByCategory();
  }, [products]);

  const electronicSelection = () => {
    const electronics = groupedProducts.laptops.concat(groupedProducts.tablets)
    setSelectedProducts(electronics)
    setSelectedCategory('Electronics')
  }
  const shoesSelection = () => {
    const shoes = groupedProducts['mens-shoes'].concat(groupedProducts['womens-shoes'])
    setSelectedProducts(shoes)
    setSelectedCategory('Shoes')
  }
  const beautySelection = () => {
    const beauty = groupedProducts.beauty.concat(groupedProducts['skin-care'], groupedProducts.sunglasses)
    setSelectedProducts(beauty)
    setSelectedCategory('Beauty')
  }
  const kitchenSelection = () => {
    setSelectedProducts(groupedProducts['kitchen-accessories'])
    setSelectedCategory('Kitchen')
  }
  const sportSelection = () => {
    setSelectedProducts(groupedProducts['sports-accessories'])
    setSelectedCategory('Sport')
  }
  const womenSelection = () => {
    const women = groupedProducts.tops.concat(groupedProducts['womens-bags'], groupedProducts['womens-dresses'], groupedProducts['womens-jewellery'], groupedProducts['womens-shoes'], groupedProducts['womens-watches'])
    setSelectedProducts(women)
    setSelectedCategory('Women')
  }

  return (
    <div className="wrapper">
      <div className="header">
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '25%' }}>
          <TemporaryDrawer beautySelection={beautySelection} kitchenSelection={kitchenSelection} sportSelection={sportSelection} womenSelection={womenSelection} electronicSelection={electronicSelection} allProducts={allProducts} setSelectedCategory={setSelectedCategory} groupedProducts={groupedProducts} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} all={all} beauty={beauty} electronics={electronics} vehicles={vehicles} groceries={groceries} home={home} sport={sport} phone={phone} fragrances={fragrances} kitchen={kitchen} men={men} women={women} />
          <img src={logo} draggable='false' alt="Golden Commerce Logo" width={'50%'} style={{ filter: 'drop-shadow(-6px 5px 16px #c9cc38)' }} />
        </div>
        <FullWidthTextField />
        <MyBasket />
      </div>
      <Routes>
        <Route path="/" element={
          <div>

            <div className="headerSection">
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '70em' }}>
                <div className="popularProductSlider">
                  <Slider {...fadeSettings}>
                    {popularCategories && popularCategories.map((product, key) => (
                      <PopularCategories electronicSelection={electronicSelection} key={key} productTitle={product.title} productDescription={product.description} productImg={product.images[0]} />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '7.5em 0 7.5em 0' }}>
              <TopCategories svg={<svg fill="#000000" height="200px" width="139px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path class="cls-1" d="M14,12V6H5v6H9v1H7v1h5V13H10V12ZM6,11V7h7v4ZM7,5H4V4H7ZM8,5V3H3v7H4v3H6v1H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H8A1,1,0,0,1,9,3V5Z" /></svg>} title={'Electronics'} description={electronicsDescription} />
              <TopCategories svg={<svg fill="#000000" width="200px" height="139px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10,6v4H6V2A4,4,0,0,1,10,6ZM20,17a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v1H20ZM9,22H19a1,1,0,0,0,1-1V19H8v2A1,1,0,0,0,9,22ZM4,13v8a1,1,0,0,0,1,1H6V17a4,4,0,0,1,4-4h2V12H5A1,1,0,0,0,4,13Z" /></svg>} title={'Beauty'} description={beautyDescription} />
              <TopCategories svg={<svg fill="#000000" width="200px" height="139px" viewBox="-1.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M2.461 7.02a1.61 1.61 0 0 1 1.61 1.611v2.456h7.857V8.63a1.61 1.61 0 1 1 1.988 1.566v4.634a.476.476 0 0 1-.475.475H2.559a.476.476 0 0 1-.475-.475v-4.634A1.61 1.61 0 0 1 2.46 7.02zm1.059-.894a2.68 2.68 0 0 0-.227-.084V4.669A1.111 1.111 0 0 1 4.4 3.56h7.198a1.111 1.111 0 0 1 1.108 1.109v1.373a2.679 2.679 0 0 0-.227.084 2.717 2.717 0 0 0-1.66 2.505v1.347H5.18V8.631a2.72 2.72 0 0 0-1.66-2.505z" /></svg>} title={'Furniture'} description={furnitureDescription} />
            </div>
            <div className="discountAnouncePage">
              <div className="firstColumn">
                <h4>Every Computer and Laptop</h4>
                <h3>Up to 40% off!</h3>
                <button>Shop Now!</button>
              </div>
              <img src={pcDiscount} alt="asd" />
            </div>
            <div className="explorePopulars">
              <Link to='/products'>
                <ExplorePopulars click={electronicSelection} title={'Electronics'} img={"https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/1.png"} />
              </Link>
              <Link to='/products'>
                <ExplorePopulars click={womenSelection} title={'Women'} img={"https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/1.png"} />
              </Link>
              <Link to='/products'>
                <ExplorePopulars click={beautySelection} title={'Beauty'} img={"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"} />
              </Link>
              <Link to='/products'>
                <ExplorePopulars click={sportSelection} title={'Sports'} img={"https://cdn.dummyjson.com/products/images/sports-accessories/Football/1.png"} />
              </Link>
              <Link to='/products'>
                <ExplorePopulars click={shoesSelection} title={'Shoes'} img={"https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/4.png"} />
              </Link>
              <Link to='/products'>
                <ExplorePopulars click={kitchenSelection} title={'Kitchen'} img={"https://cdn.dummyjson.com/products/images/kitchen-accessories/Silver%20Pot%20With%20Glass%20Cap/1.png"} />
              </Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <FurnitureBoard />
            </div>
          </div>
        } />
        <Route path="/products" element={
          <div>
            <Header selectedProducts={selectedProducts} page={page} selectedCategory={selectedCategory} />
            <ProductLister selectedProducts={selectedProducts} page={page} setPage={setPage} />
          </div>
        } />
        <Route path="/feedback" element={
          <div>
            <FeedBack />
          </div>
        } />
      </Routes>
      <Footer logo={logo} />
      <div className="footersDown">
        <p>Copyright © 2024 Arda Mert Keleş All Rights Reserved.</p>
        <a href="">Accessibility</a>
        <a href="">User Agreement</a>
        <a href="">Privacy</a>
        <a href="">Payments Terms of Use</a>
        <a href="">Cookies</a>
      </div>
      <a href="#" style={{ position: 'fixed', right: '30px', bottom: '50px' }}>
        <IconButton color="primary" sx={{ border: '1px solid gray', background: 'white' }} aria-label="Scroll to Top">
          <KeyboardArrowUpIcon sx={{ color: 'black' }} />
        </IconButton>
      </a>
    </div>
  );
}


export default App;
