import { FILTERS_RECEIVED } from "../actions/filterActions";

const initialState = {
  filter_list:null,
  applied_filters:null
}

const filterReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FILTERS_RECEIVED:
      return {
        ...state,
        filter_list:payload
      }
    default:
      return state;
  }
}

export default filterReducer;
