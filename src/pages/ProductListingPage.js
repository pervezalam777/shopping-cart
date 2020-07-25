import React from 'react';
import {
  ProductListing,
  FiltersListing,
  HeaderContainer
} from '../container-components';


function ProductListingPage() {
  return (
    <div>
      <HeaderContainer /> 
      <main>
        <FiltersListing />
        <ProductListing />
      </main>
    </div>
  )
}

export default ProductListingPage