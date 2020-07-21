
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { 
  FILTERS_LOADING,
  FILTERS_RECEIVED,
  FILTERS_FETCH_ERROR,
  loadFilters
} from '../filterActions';

jest.mock('../../services/filterService');

import { fetchFiltersFromServer } from '../../services/filterService';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Filter action', () => {
  it('should dispatch actions for loading filters list successfully', async () => {
    const spy = fetchFiltersFromServer.mockReturnValue(Promise.resolve([]));
    spy.mockClear();

    const store = mockStore({});

    await store.dispatch(loadFilters());
    expect(spy).toHaveBeenCalled();

    const expectedActions = [
      {type:FILTERS_LOADING},
      {type:FILTERS_RECEIVED, payload:[]}
    ]
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  })

  it('should dispatch actions for loading filters list fail', async () => {
    const spy = fetchFiltersFromServer.mockReturnValue(Promise.reject({error:''}));
    spy.mockClear();
    
    const store = mockStore({});

    await store.dispatch(loadFilters());
    expect(spy).toHaveBeenCalled();

    const expectedActions = [
      {type:FILTERS_LOADING},
      {type:FILTERS_FETCH_ERROR, payload:{error:''}}
    ]
    const storeActions = store.getActions();
    expect(storeActions).toEqual(expectedActions);
  })
})