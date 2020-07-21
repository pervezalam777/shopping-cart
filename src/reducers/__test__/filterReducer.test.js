import filterReducer from '../filterReducer';
import { FILTERS_RECEIVED, ADD_COLOR_TO_FILTER, REMOVE_COLOR_FROM_FILTER, ADD_BRAND_TO_FILTER, REMOVE_BRAND_FROM_FILTER } from '../../actions/filterActions';


const initialState = {
  filter_list:null,
  applied_filters:{}
}

const serverResponse = [
  {
    "type": "BRAND",
    "values": [
      {
        "title": "1 Can",
        "value": "1 can"
      }
    ]
  },
  {
    "type": "PRICE",
    "values": [
      {
        "displayValue": "Min",
        "key": "Min"
      }
    ]
  },
  {
    "type": "COLOUR",
    "values": [
      {
        "color": "#F5F5DC",
        "title": "Beige"
      }
    ]
  }
]

describe('Filter Reducer', () => {
  it('should return default state if action type does not match', () => {
    const newState = filterReducer(initialState, {type:'unknown'});
    expect(newState).toEqual(initialState);
  });

  it('should store filters list in state', () => {
    const action = {type:FILTERS_RECEIVED, payload:[...serverResponse]};
    const newState = filterReducer(initialState, action);

    const expectedState = {...initialState, filter_list:[...serverResponse]};
    expect(newState).toEqual(expectedState);
    expect(newState).not.toEqual(initialState);
  });

  it('should return updated filter on color add', () => {
    const color = '#ffffff';
    let action = {type:ADD_COLOR_TO_FILTER, payload:color};
    let newState = filterReducer(initialState, action);
    //ADD COLOR
    let expectedState = {...initialState, applied_filters:{'color':[color]}};
    expect(newState).toEqual(expectedState);
    expect(newState).not.toEqual(initialState);

    //RETURN SAME SATE IF COLOR ALREADY EXISTS
    newState = filterReducer(expectedState, action);
    expect(newState).toEqual(expectedState);

    //ADD MORE COLOR
    const newColor = '#000000';
    action.payload = newColor;
    newState = filterReducer(expectedState, action);
    expectedState = {...initialState, applied_filters:{'color':[color, newColor]}};
    expect(newState).toEqual(expectedState);
  });

  it('should return updated filter on color remove', () => {
    //RETURN SAME STATE IF NO COLOR ADDED OR EXISTS
    const color = '#ffffff';
    let action = {type:REMOVE_COLOR_FROM_FILTER, payload:color};
    let newState = filterReducer(initialState, action);
    expect(newState).toEqual(initialState);

    // RETURN STATE WITHOUT COLOR KEY IN FILTERED ARRAY
    let state = {...initialState, applied_filters:{'color':[color]}};
    newState = filterReducer(state, action);
    expect(newState).toEqual(initialState);
    expect(newState).not.toEqual(state);

    // RETURN STATE WITH COLOR ARRAY REMOVED ONE ITEM
    const newColor = '#000000';
    action.payload = newColor;
    let stateTwo = {...initialState, applied_filters:{'color':[color, newColor]}};
    newState = filterReducer(stateTwo, action);
    expect(newState).toEqual(state);
    expect(newState).not.toEqual(stateTwo);
  });

  it('should return updated filter on brand add', () => {
    const brand = 'raymond';
    let action = {type:ADD_BRAND_TO_FILTER, payload:brand};
    let newState = filterReducer(initialState, action);
    //ADD BRAND
    let expectedState = {...initialState, applied_filters:{'brand':[brand]}};
    expect(newState).toEqual(expectedState);
    expect(newState).not.toEqual(initialState);

    //RETURN SAME SATE IF BRAND ALREADY EXISTS
    newState = filterReducer(expectedState, action);
    expect(newState).toEqual(expectedState);

    //ADD MORE BRAND
    const newBrand = 'peter england';
    action.payload = newBrand;
    newState = filterReducer(expectedState, action);
    expectedState = {...initialState, applied_filters:{'brand':[brand, newBrand]}};
    expect(newState).toEqual(expectedState);
  });
  
  it('should return update filter on brand remove', () => {
    //RETURN SAME STATE IF NO BRAND ADDED OR EXISTS
    const brand = 'raymond';
    let action = {type:REMOVE_BRAND_FROM_FILTER, payload:brand};
    let newState = filterReducer(initialState, action);
    expect(newState).toEqual(initialState);

    // RETURN STATE WITHOUT BRAND KEY IN FILTERED ARRAY
    let state = {...initialState, applied_filters:{'brand':[brand]}};
    newState = filterReducer(state, action);
    expect(newState).toEqual(initialState);
    expect(newState).not.toEqual(state);

    // RETURN STATE WITH BRAND ARRAY REMOVED ONE ITEM
    const newBrand = 'peter england';
    action.payload = newBrand;
    let stateTwo = {...initialState, applied_filters:{'brand':[brand, newBrand]}};
    newState = filterReducer(stateTwo, action);
    expect(newState).toEqual(state);
    expect(newState).not.toEqual(stateTwo);
  });

})