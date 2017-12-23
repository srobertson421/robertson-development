import React, { Component } from 'react';
import moment from 'moment';
import { Helmet } from "react-helmet";
import { db } from '../../services/firebase-service';

import './ViewPost.css';

class ViewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: '',
      post: {
        title: '',
        content: '',
        createdAt: new Date().toISOString()
      }
    }
  }

  componentDidMount() {
    db.ref(`posts/${this.props.match.params.id}`).on('value', (snapshot) => {
      let post = snapshot.val();
      this.setState({post: post, postId: snapshot.key});
      this.refs.postContent.innerHTML = post.content;
    });
  }

  render() {
    return (
      <div className="container">
        <Helmet
          title={this.state.post.title}
          meta={[
          { name: 'author', content: "Sharon Robertson" },

          { name: 'twitter:site', content: "https://robertson-development.com" },
          { name: 'twitter:creator', content: "Sharon Robertson" },
          { name: 'twitter:title', content: this.state.post.title },

          { property: 'og:title', content: this.state.post.title },
          { property: 'og:site_name', content: "Robertson Development" },
          { property: 'og:type', content: "website" },
          { property: 'og:url', content: `https://robertson-development.com/post/${this.state.postId}/${encodeURI(this.state.post.title)}` },
          { property: 'og:description', content: this.state.post.content.replace(/(<([^>]+)>)/ig,"") },
          ]}
        ></Helmet>
        <div className="row post">
          <div className="twelve columns content-area">
            <h3 className="page-header">{this.state.post.title}</h3>
            <span className="post-time">Posted {moment(this.state.post.createdAt).fromNow()}</span>
            <div className="row">
              <div ref="postContent"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPost;
