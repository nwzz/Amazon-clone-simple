import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>provide by:{seller}</small></p>
                <h3>${price}</h3>
                <br />
                <p>Only {stock} available -Order soon</p>
                <button className="main-btn" onClick = {() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;