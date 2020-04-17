import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostsAction = () => async dispatch => {
        const response  = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
};

export const fetchUserAction = (id) => dispatch => memoizedFetchUser(id, dispatch);
const memoizedFetchUser = _.memoize( async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
});