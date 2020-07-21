import { FILTERS_RECEIVED, ADD_COLOR_TO_FILTER, REMOVE_COLOR_FROM_FILTER, ADD_BRAND_TO_FILTER, REMOVE_BRAND_FROM_FILTER } from "../actions/filterActions";

const initialState = {
  filter_list:null,
  applied_filters:{}
}

function addToFilter(filters, key, value){
  if(filters == null){
    return {[key]:[value]};
  }
  return {
    ...filters,
    [key]: filters[key] ? [...filters[key], value] : [value]
  }
}

function removeFilter(filter, key, value){
  let newFilter = {...filter};
  if(newFilter[key].length === 1){
    delete newFilter[key]
    return newFilter
  }
  newFilter[key] = newFilter[key].filter(val => val !== value);
  return newFilter
}

function isValueExits(filters, key, value) {
  return (filters && filters[key] && filters[key].includes(value))
}

function addFilterOrReturnSameState(state, key, value){
  let appliedFilters = state.applied_filters;
  if(isValueExits(appliedFilters, key, value)){
    return state;
  }
  return {
    ...state,
    applied_filters: addToFilter(appliedFilters, key, value)
  }
}

function removeFilterOrReturnSameState(state, key, value){
  let appliedFilters = state.applied_filters;
  if(isValueExits(appliedFilters, key, value)){
    return {
      ...state,
      applied_filters: removeFilter(appliedFilters, key, value)
    }
  }
  return state;
}

const filterReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FILTERS_RECEIVED:
      return {
        ...state,
        filter_list:payload
      }
    case ADD_COLOR_TO_FILTER:
      return addFilterOrReturnSameState(state, 'color', payload);
    case REMOVE_COLOR_FROM_FILTER:
      return removeFilterOrReturnSameState(state, 'color', payload);
    case ADD_BRAND_TO_FILTER:
      return addFilterOrReturnSameState(state, 'brand', payload);
    case REMOVE_BRAND_FROM_FILTER:
      return removeFilterOrReturnSameState(state, 'brand', payload);
    default:
      return state;
  }
}

export default filterReducer;
