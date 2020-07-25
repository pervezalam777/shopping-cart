import React from 'react';
import style from './ProductCard.module.css'

function ProductCard(props) {
  return (
    <div className={style.card}>
      <h3>{props.title}</h3>
      <p>{props.brand}</p>
      <p>{props.colour.title}</p>
      <p>{props.price.final_price}</p>
    </div>
  )
}

export default ProductCard;