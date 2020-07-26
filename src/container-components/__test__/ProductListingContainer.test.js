import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductListingContainer from '../ProductListingContainer';

Enzyme.configure({adapter: new Adapter()});

const mockStore = configureStore([]);

const storeState = {
  product_list:['product_1', 'product_2'],
  filterable_product_list:{
    filterable_products:{
      product_1:{},
      product_2:{}
    },
    products_searchable_criteria:{}
  },
  filter:{
    filter_list: [
      {type:'BRAND', values:[]},
      {type:'COLOUR', values:[]},
      {type:'PRICE', values:[]}
    ],
    applied_filters: {}
  }
}

describe('Filter listing Container', () => {
  let store, wrapper;
  beforeEach(() => {
    store = mockStore(storeState);
    store.dispatch = jest.fn();

    wrapper = shallow(<Provider store={store}>
      <ProductListingContainer />
    </Provider>);
  })

  it('should render with two product', () => {
    expect(wrapper.exists()).toBe(true);
  })
});