import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProductLister({ selectedProducts, page, setPage }) {

    const [productLister, setProductLister] = useState([])
    const [favourite, setFavourite] = useState(<FavoriteBorderIcon />)
    const [favTrue, setFavTrue] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const chunkedArray = [];
        for (let i = 0; i < selectedProducts.length; i += 9) {
            chunkedArray.push(selectedProducts.slice(i, i + 9));
            setProductLister(chunkedArray)
            console.log(productLister) // Console.log this for all products
        }
    }, [selectedProducts])

    const addProductFavourite = () => {
       
    }

    const handleChange = (event, value) => {
        setPage(value);
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    };

    return (
        <div className="productListerWrapper">
            <div className="productListerContainer">
                {!loading && productLister[page - 1] && productLister[page - 1].map((product, key) => (
                    <div key={key} className="productCard">
                        <div className="imageSection">
                            <img src={product.images[0]} alt="product image" />
                            <IconButton className="favIcon" sx={{ position: 'absolute', right: '10px', top: '5px' }} aria-label="favourite" onClick={addProductFavourite}>
                                <FavoriteBorderIcon />
                            </IconButton>
                            <p className="stockOverview">{product.availabilityStatus}</p>
                        </div>
                        <div className="overviewSection">
                            <h3>{product.title}</h3>
                            <div className="bottom">
                                <div className="rating_price">
                                    <p className="price">{product.price}</p>
                                    <Rating size="small" name="half-rating-read" defaultValue={product.rating} precision={0.1} readOnly />
                                </div>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>
                ))}
                {loading && <CircularProgress color="inherit" />}
            </div>
            <Pagination sx={{ margin: '1em 0 3em 0' }} size="large" count={productLister.length} page={page} onChange={handleChange} variant="outlined" />
        </div>
    )
}