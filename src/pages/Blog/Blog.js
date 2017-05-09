import React, { Component } from 'react';
import PostList from '../../components/PostList/PostList';

class Blog extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns content-area">
            <div className="row">
              <PostList posts={this.props.posts} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
