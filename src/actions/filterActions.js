import { fetchFiltersFromServer } from "../services/filterService";

export const FILTERS_LOADING = Symbol('filters_loading');
export const FILTERS_RECEIVED = Symbol('filters_received');
export const FILTERS_FETCH_ERROR = Symbol('filters_fetch_error')

const loadingFilters = () => ({type:FILTERS_LOADING});
const filtersReceived = (data) => ({type:FILTERS_RECEIVED, payload:data});
const filtersFetchError = (error) => ({type:FILTERS_FETCH_ERROR, payload:error})

export const loadFilters = () => {
  return async (dispatch) => {
    dispatch(loadingFilters())
    try {
      const data = await fetchFiltersFromServer();
      dispatch(filtersReceived(data));
    } catch (error) {
      dispatch(filtersFetchError(error));
    }
  }
}