import React, { Component } from 'react';
import PostListItem from '../PostListItem/PostListItem';

class PostList extends Component {
  render() {
    let posts = this.props.posts.map((post) => {
      return <PostListItem key={post.id} post={post} />
    });

    return (
      <div>
        {posts}
      </div>
    );
  }
}

export default PostList;
