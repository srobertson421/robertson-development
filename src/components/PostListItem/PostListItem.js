import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class PostListItem extends Component {
  componentDidMount() {
    this.refs.postContent.innerHTML = `${this.props.post.content.substring(0, 75)}...`;
  }

  render() {
    return (
      <div>
        <Link to={`/post/${this.props.post.id}/${encodeURI(this.props.post.title)}`}>
          <div>
            <h3>{this.props.post.title} <span>{moment(this.props.post.createdAt).fromNow()}</span></h3>
            <div ref="postContent"></div>
          </div>
        </Link>
      </div>
    );
  }
}

export default PostListItem;
