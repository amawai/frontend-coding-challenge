import axios from 'axios';

export const FETCH_API_DATA = 'FETCH_API_DATA';
export const FETCH_API_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_API_ERROR = 'FETCH_ERROR';

const SEARCH_URL = process.env.REACT_APP_REST_URL + process.env.REACT_APP_API_KEY

export function getDrinks(params) {
    return dispatch => {
        dispatch(fetchingData());
        axios.get(SEARCH_URL + '&q=@tpprixnum%3C10')
            .then(res => {
                dispatch(fetchDrinksSuccess(res.data.results))
            })
            .catch(err => {
                dispatch(fetchDrinksError(err.message))
            })
    }
}

const fetchingData = () => ({
    type: FETCH_API_DATA
});

const fetchDrinksSuccess = (payload) => ({
    type: FETCH_API_SUCCESS,
    payload
});

const fetchDrinksError = (error) => ({
    type: FETCH_API_ERROR,
    error
})