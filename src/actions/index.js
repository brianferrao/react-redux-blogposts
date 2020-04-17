import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPostsAction());
    _.uniq(_.map(getState().blogPosts, 'userId')).forEach( userId => dispatch(fetchUserAction(userId)));
};

export const fetchPostsAction = () => async dispatch => {
        const response  = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
};

export const fetchUserAction = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
}

/* export const fetchUserAction = (id) => dispatch => memoizedFetchUser(id, dispatch);
const memoizedFetchUser = _.memoize( async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
}); */