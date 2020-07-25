import React from 'react';
import { connect } from 'react-redux';
import {ProductCard} from '../components'

function ProductListing({dispatch, productListIds, productList, appliedFiler}) {
  console.log("ids.......", productListIds);
  console.log('ProductList', productList);
  return (
    <section>
      {
        productListIds && productListIds.length > 0 &&
        productListIds.map(productId => (
          <ProductCard key={productId} {...productList.filterable_products[productId]} />
        ))
      }
    </section>
  )
}



const mapStateToProps = (state) => {
  return {
    appliedFiler: state.filter.applied_filters,
    productListIds: state.product_list,
    productList: state.filterable_product_list
  }
}

export default connect(mapStateToProps)(ProductListing);