import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={'/product/'+key}>{name}</Link></h4>
                <br/>
                <p><small>provide by:{seller}</small></p>
                <h3>${price}</h3>
                <br />
                <p>Only {stock} available -Order soon</p>
                { props.showAddToCart && <button className="main-btn" onClick = {() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>}
            </div>

        </div>
    );
};

export default Product;