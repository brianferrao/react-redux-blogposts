import React from 'react';
import { connect } from 'react-redux';
import { fetchUserAction } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUserAction(this.props.userId);
    }

    render() {
        if(!this.props.user) {
            return null;
        }
        return (
            <div className="header">{this.props.user.name}</div>
        );
    }
}

const mapStateToProps = (state, currentProps) => {
    console.log(state);
    return { user : state.users.find( user => user.id === currentProps.userId)}
}

export default connect(mapStateToProps, {fetchUserAction})(UserHeader);