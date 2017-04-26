import React, { Component } from 'react';
import homeImage from '../../images/homepage-side.jpg';

import EventPhotoWidget from '../../components/EventPhotoWidget/EventPhotoWidget';
import PostList from '../../components/PostList/PostList';

class Blog extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="eight columns content-area">
            <div className="row">
              <PostList posts={this.props.posts} />
            </div>
          </div>
          <div className="four columns">
            <EventPhotoWidget currentPage={this.props.pageName} imagePath={homeImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
