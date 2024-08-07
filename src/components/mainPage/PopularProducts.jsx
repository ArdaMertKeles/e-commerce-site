import React, { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';

export default function PopularProducts() {

    const [favourite, setFavourite] = useState(<FavoriteBorderIcon />)
    const [favTrue, setFavTrue] = useState(false)

    const addProductFavourite = () => {
        if (favTrue) {
            setFavTrue(false)
        }
        if (!favTrue) {
            setFavTrue(true)
        }
    }

    useEffect(() => {
        if (favTrue === false) {
            setFavourite(<FavoriteBorderIcon />)
        }
        if (favTrue === true) {
            setFavourite(<FavoriteIcon sx={{ color: 'red' }} />)
        }
    }, [favTrue])

    return (
        <div className="popularProductCard">
            <img src="https://i.ebayimg.com/images/g/hyQAAOSw~9Zmc56p/s-l1600.webp" width={'150px'} style={{ borderRadius: '15px' }} alt="" />
            <h4 className="productTitle">Telefon</h4>
            <div className="cardBottomRow">
                <p className="price">55TL</p>
                <span>
                    <IconButton aria-label="favourite" onClick={addProductFavourite}>
                        {favourite}
                    </IconButton>
                    <Button variant="contained" disableElevation size="small" >
                        Buy
                        <ShoppingCartIcon sx={{ paddingLeft: '2px' }} />
                    </Button>
                </span>
            </div>
        </div>
    )
}