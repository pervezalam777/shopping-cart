import React from 'react';
import { connect } from 'react-redux';
import { BrandCard } from '../components'
import { filterProductList } from '../actions/productActions';
import { addBrandToFilter, removeBrandFromFilter } from '../actions/filterActions';

function BrandContainer(props){
  const handleChange = (event) => {
    console.log(event.target.id, event.target.checked);
    if(event.target.checked){
      props.dispatch(addBrandToFilter(event.target.id))
    } else {
      props.dispatch(removeBrandFromFilter(event.target.id))
    }
    props.dispatch(filterProductList())
  }

  return (
    <BrandCard 
      selectedBrands={props.selectedBrands}
      values={props.values} 
      handleChange={handleChange} 
    />
  )
}

const mapStateToProps = (state) => {
  return {
    selectedBrands: state.filter.applied_filters['brand'] || []
  }
}

export default connect(mapStateToProps)(BrandContainer);