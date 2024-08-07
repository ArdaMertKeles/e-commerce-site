import React from "react";
import { Link } from "react-router-dom";

export default function PopularCategories({ productTitle, productDescription, productImg, electronicSelection }) {

    return (
        <div className="popularCategories">
            <div className="firstColumn">
                <h2 className="productTitle">
                    {productTitle}
                </h2>
                <p className="productDescription">
                    {productDescription}
                </p>
                <div className="buttons">
                    <button>
                        Buy Now
                    </button>
                    <Link to='/products' >
                        <button onClick={electronicSelection}>
                            Category Page
                        </button>
                    </Link>
                </div>
            </div>
            <img src={productImg} alt="" />
        </div>
    )
}