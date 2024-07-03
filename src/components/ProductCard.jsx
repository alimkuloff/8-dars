import React from 'react';
import './ProductCard.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; 

const truncateDescription = (description, maxLength = 150) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...';
  }
  return description;
};

function ProductCard({ product, onLike, onUnlike, liked }) {
  const handleClick = () => {
    if (liked) {
      onUnlike(product);
    } else {
      onLike(product);
    }
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{truncateDescription(product.description)}</p>
        <button className="heart-button" onClick={handleClick}>
          {liked ? <AiFillHeart className="heart-icon" /> : <AiOutlineHeart className="heart-icon" />}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
