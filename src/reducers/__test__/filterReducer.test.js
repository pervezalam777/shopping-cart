import filterReducer from '../filterReducer';
import { FILTERS_RECEIVED } from '../../actions/filterActions';


const initialState = {
  filter_list:null,
  applied_filters:null
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
  })
})