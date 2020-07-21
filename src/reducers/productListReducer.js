import { FILTER_PRODUCT_LIST } from "../actions/productActions";

const initialState = null;

function intersect(firstArray, secondArray){
  return firstArray.reduce((uniqueList, item) => {
    if(secondArray.includes(item) === true){
      uniqueList.push(item);
    }
    return uniqueList;
  }, [])
}

function unique(firstArray, secondArray) {
  return firstArray.reduce((uniqueList, item) => {
    if(uniqueList.includes(item) === false){
      uniqueList.push(item);
    }
    return uniqueList;
  }, [...secondArray])
}

function getProductIdsUniqueList(criteriaListObject, keysList) {
  return keysList.reduce((concatList, nextKey) => {
    return unique(criteriaListObject[nextKey], concatList);
  }, [])
}

function getPriceFilter([minimum, maximum], list) {
  let min = minimum || -1;
  let max = maximum || -1;
  return Object
    .entries(list)
    .reduce((newList, [productId, productDetails]) => {
      let price = productDetails.price.final_price;
      if((max !== -1 && min !== -1) && (price >= min && price <= max)){
        return [...newList, productId]
      }
      if(max === -1 && min !== -1 && price >= min){
        return [...newList, productId]
      }
      if(min === -1 && max !== -1 && price <= max){
        return [...newList, productId]
      }
      return newList
    }, [])
}

function getProductFilter(type, criteria, list){
  switch(type){
    case 'price':
      return getPriceFilter(criteria, list)
    default:
      return Object.keys(list);
  }
}

function filterProductList({
  filterable_product_list:{
    products_searchable_criteria, 
    filterable_products,
  },
  filter:{applied_filters}
}) {
  if(applied_filters === null || applied_filters === {}){
    return Object.keys(filterable_products);
  }
  return Object
    .keys(applied_filters)
    .reduce((filterList, nextKey) => {
      const criteriaExists = products_searchable_criteria[nextKey];
      let uniqueList;
      if(criteriaExists){
        uniqueList = getProductIdsUniqueList(criteriaExists, applied_filters[nextKey]);
      } else {
        uniqueList = getProductFilter(nextKey, applied_filters[nextKey], filterable_products)
      }
      return filterList.length > 0 ? intersect(uniqueList, filterList) : uniqueList;
    }, [])
}

const productListReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FILTER_PRODUCT_LIST:
      return filterProductList(payload)
    default:
      return state;
  }
}

export default productListReducer;