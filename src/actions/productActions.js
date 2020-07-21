import {fetchProductListFromServer} from '../services/productService';

export const PRODUCT_LIST_FETCHING = Symbol('product_list_fetching');
export const PRODUCT_LIST_RECEIVED = Symbol('product_list_received');
export const PRODUCT_LIST_FETCH_ERROR = Symbol('product_list_fetch_error');
const loadingProduct = () => ({type:PRODUCT_LIST_FETCHING});
const productListReceived = (data) => ({type:PRODUCT_LIST_RECEIVED, payload:data});
const productFetchError = (error) => ({type:PRODUCT_LIST_FETCH_ERROR, payload:error});

export const loadProducts = () => {
  return async (dispatch) => {
    dispatch(loadingProduct())
    try {
      const data = await fetchProductListFromServer();
      dispatch(productListReceived(data))
    } catch (error) {
      dispatch(productFetchError(error))
    }
  }
}

export const FILTER_PRODUCT_LIST = Symbol('filter_product_list')
const filterProductList = (input) => ({type:FILTER_PRODUCT_LIST, payload:input})

export const getProductListToDisplay = () => {
  return (dispatch, getState) => {
    const state = getState();
    const input = {
      applied_filters: state.filter.applied_filters,
      filterable_product_list: state.filterable_product_list
    }
    dispatch(filterProductList(input))
  }
}