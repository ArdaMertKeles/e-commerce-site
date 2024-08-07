import React from "react";

export default function Header({ selectedCategory, selectedProducts, page}) {

    return (
        <div className="productsHeaderWrapper">
            <h2>{selectedCategory}</h2>
            <div className="container">
                <div>
                    <p>{1+9*(page-1)-1}-{9*page} of over {selectedProducts.length} results. Searched product: <p>{selectedCategory}</p> </p>
                    <span>
                        <label htmlFor="filter">Sort by:</label>
                        <select name="filter" id="filter">
                            <option value="Best Match">Best Match</option>
                            <option value="Price: lowest first">Price: lowest first</option>
                            <option value="Price: highest first">Price: highest first</option>
                            <option value="A to Z">A to Z</option>
                            <option value="Z to A">Z to A</option>
                        </select>
                    </span>
                </div>
            </div>
        </div>
    )
}