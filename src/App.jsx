import React, { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  const handleLike = (product) => {
    if (!likedProducts.some(item => item.id === product.id)) {
      setLikedProducts([...likedProducts, product]);
    }
  };

  const handleUnlike = (product) => {
    setLikedProducts(likedProducts.filter(item => item.id !== product.id));
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onLike={handleLike}
            onUnlike={handleUnlike}
            liked={likedProducts.some(item => item.id === product.id)}
          />
        ))}
      </div>
      <div className="liked-products">
        <h2>Liked Products</h2>
        <div className="products-grid">
          {likedProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onLike={handleLike}
              onUnlike={handleUnlike}
              liked={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
