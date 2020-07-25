import React from 'react';
import { connect } from 'react-redux';
import ColorContainer from './ColorContainer';
import BrandContainer from './BrandContainer';
import PriceContainer from './PriceContainer';
import { resetAppliedFilter } from '../actions/filterActions';
import { filterProductList } from '../actions/productActions';

import styles from './FiltersListingContainer.module.css'

const mapComponent = {
  'BRAND':BrandContainer,
  'COLOUR':ColorContainer,
  'PRICE':PriceContainer
}

function FiltersListing(props){
  const handleReset = () => {
    props.dispatch(resetAppliedFilter());
    props.dispatch(filterProductList());
  }

  return (
    <section className='side'>
      <header className={`${styles.header} ${styles.gap}`}>
        <h3>Filters</h3>
        <button className={styles.button} onClick={handleReset}>reset</button>
      </header>
      <div className={`${styles.gap}`}>
        {
          props.filters &&
          props.filters.map((item) => {
            let Component = mapComponent[item.type];
            return (<Component key={item.type} values={item.values}/>)
          })
        }
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filter.filter_list
  }
}

export default connect(mapStateToProps)(FiltersListing);