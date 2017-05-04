import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './PostListItem.css';

class PostListItem extends Component {
  componentDidMount() {
    this.refs.postContent.innerHTML = `${this.props.post.content.substring(0, 175)}...`;
  }

  render() {
    return (
      <div className="post-item">
        <Link to={`/post/${this.props.post.id}/${encodeURI(this.props.post.title)}`}>
          <div className="post-item-header">
            <h4>{this.props.post.title}</h4>
            <span>Posted {moment(this.props.post.createdAt).fromNow()}</span>
            <div ref="postContent"></div>
          </div>
        </Link>
      </div>
    );
  }
}

export default PostListItem;
