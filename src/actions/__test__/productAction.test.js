
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { 
  PRODUCT_LIST_FETCHING,
  PRODUCT_LIST_RECEIVED,
  PRODUCT_LIST_FETCH_ERROR,
  loadProducts 
} from '../productActions';

jest.mock('../../services/productService');

import { fetchProductListFromServer } from '../../services/productService';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Product action', () => {
  it('should dispatch actions for loading list successfully', async () => {
    const spy = fetchProductListFromServer.mockReturnValue(Promise.resolve([]));
    spy.mockClear();

    const store = mockStore({});

    await store.dispatch(loadProducts());
    expect(spy).toHaveBeenCalled();

    const expectedActions = [
      {type:PRODUCT_LIST_FETCHING},
      {type:PRODUCT_LIST_RECEIVED, payload:[]}
    ]
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  })

  it('should dispatch actions for loading list fail', async () => {
    const spy = fetchProductListFromServer.mockReturnValue(Promise.reject({error:''}));
    spy.mockClear();
    
    const store = mockStore({});

    await store.dispatch(loadProducts());
    expect(spy).toHaveBeenCalled();

    const expectedActions = [
      {type:PRODUCT_LIST_FETCHING},
      {type:PRODUCT_LIST_FETCH_ERROR, payload:{error:''}}
    ]
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  })
})