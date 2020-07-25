import React from 'react';
import styles from './ProductCard.module.css'
import ColorComponent from '../colorCard/ColorComponent';

function ProductCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles['card-image']}>
        <img src={props.image} />
      </div>
      <div className={styles['product-info']}>
        <h3>{props.title}</h3>
        <div className={styles.details}>
          <div style={{alignSelf: 'flex-start'}}>
            <p>{props.brand}</p>
            <p>{props.colour.title}</p>
            <p>{props.price.final_price}</p>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
            <ColorComponent {...props.colour} noEvent />
            <button className={`${styles['add-button']}`}>add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;