import React from 'react';
import style from './ProductCard.module.css'
import ColorComponent from '../colorCard/ColorComponent';

function ProductCard(props) {
  return (
    <div className={style.card}>
      <div className={style['card-image']}>
        <img src={props.image} />
      </div>
      <div className={style['product-info']}>
        <h3>{props.title}</h3>
        <div className={style.details}>
          <div style={{alignSelf: 'flex-start'}}>
            <p>{props.brand}</p>
            <p>{props.colour.title}</p>
            <p>{props.price.final_price}</p>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
            <ColorComponent {...props.colour} noEvent />
            <button style={{alignSelf: 'flex-start'}}>add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;