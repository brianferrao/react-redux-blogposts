import React from 'react';

import BlogPosts from './BlogPosts';

class App extends React.Component {
    render() {
        return (
            <div className="ui container"><BlogPosts></BlogPosts></div>
        );
    }
}

export default App;