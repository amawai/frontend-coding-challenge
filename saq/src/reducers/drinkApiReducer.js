import { FETCH_API_DATA, FETCH_API_SUCCESS, FETCH_API_ERROR } from '../actions/coveoApiActions';

const initialState = {
  loading: false,
  products: 0,
  error: ''
};

export const drinkApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_DATA:
      return Object.assign({}, state, {loading: true});
    case FETCH_API_SUCCESS:
      return Object.assign({}, state, { products: action.payload, loading: false });
    case FETCH_API_ERROR:
      return Object.assign({}, state, { error: action.error })
    default:
      return state;
  }
};