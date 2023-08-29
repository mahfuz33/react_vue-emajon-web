import React from 'react';
import './Product.css';
import logo from '../../images/cart.png';

const Product = (props) => {
    console.log(props.product);

    const { img, name, seller, price, quantity, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;