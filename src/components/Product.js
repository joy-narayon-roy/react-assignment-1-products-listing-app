/* eslint-disable react/prop-types */
import React from 'react';

const Product = ({ product }) => {
  return (
    <article className="product">
      <img src={product.image} alt="Product Image" />
      <div className="product__details">
        <h4 className="product__title">{product.title}</h4>
        <p className="product__price">Price: ${product.price}</p>
        <p className="product__rating">Rating: {product.rating.rate}/5</p>
        <p className="product__desc">Description: {product.description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
