import React, { useState } from "react";

function Item({ name, category }) {
  
  // Use a state variable to track if an item is in the cart
  const [isInCart, setIsInCart] = useState(false);
  
  const handleAddToCart = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
