import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div style={{borderBottom:'1px solid gray',marginBottom:'5px',paddingBottom:'5px',marginLeft:'100px'}} className='review-item'>
            <h2>Review Item</h2>
            <h3 className='product-name'>Name: {name}</h3>
            <p>Quantity:{quantity}</p>
            <p>Price: {price}</p>

            <br/>
            <button className='main-btn' onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;