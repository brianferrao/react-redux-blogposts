import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const blogPostListReducer = (currentBlogPosts = [], action) => {
    if(action.type === 'FETCH_POSTS') {
        return action.payload;
    }
    return currentBlogPosts;
};

export default combineReducers({
    blogPosts: blogPostListReducer,
    users: usersReducer
});

