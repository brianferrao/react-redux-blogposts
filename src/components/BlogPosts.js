import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';


class BlogPosts extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.blogList.map( blogPost => {
            return (
                <div className="item" key={blogPost.id}>
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <div className="description">
                            <h3>{blogPost.title}</h3>
                            <p>{blogPost.body}</p>
                        </div>
                        <UserHeader userId={blogPost.userId}></UserHeader>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { blogList : state.blogPosts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(BlogPosts);