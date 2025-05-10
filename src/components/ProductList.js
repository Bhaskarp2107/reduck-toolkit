import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductList.css';

const ProductList = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: 'Running Shoes', price: 50, img: 'https://www.fashiongonerogue.com/wp-content/uploads/2023/07/Running-Types-Shoes.jpg' },
    { id: 2, name: 'Basketball Shoes', price: 80, img: 'https://www.fashiongonerogue.com/wp-content/uploads/2023/07/Basketball-Types-Shoes.jpg' },
    { id: 3, name: 'Football Shoes', price: 60, img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/z/l/f/5-thunder-black-5-5-spika-black-original-imaguxfzrwdgc77v.jpeg?q=90&crop=false' },
    { id: 4, name: 'Loafers Shoes', price: 70, img: 'https://frenchcrown.in/cdn/shop/products/FT-23_5_1080x.jpg?v=1664000706' },
    { id: 5, name: 'Boat Shoes', price: 120, img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQqnrFpSj9neN0KTtxt7QRSqB6_NjP9jHqLt_C_xYezgpFiMNYf' },
    { id: 6, name: 'Hiking Shoes', price: 85, img: 'https://www.fashiongonerogue.com/wp-content/uploads/2023/07/Hiking-Types-Shoes.jpg' },
    { id: 7, name: 'Chelsea Shoes', price: 99, img: 'https://frenchcrown.in/cdn/shop/products/FT-64_8_1080x.jpg?v=1665836122' },
    { id: 8, name: 'Cowboy Shoes', price: 65, img: 'https://www.fashiongonerogue.com/wp-content/uploads/2023/07/Cowboy-Boots-Types-Shoes.jpg' },
  ];

  return (
    <div className="product-list">
      <h2 className="section-title">Our Products</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-img" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
