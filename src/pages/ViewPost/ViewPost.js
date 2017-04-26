import React, { Component } from 'react';
import moment from 'moment';
import { db } from '../../services/firebase-service';

class ViewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      this.setState({post: post});
      this.refs.postContent.innerHTML = post.content;
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns content-area">
            <h3 className="home-header page-header">{this.state.post.title}</h3>
            <span>{moment(this.state.post.createdAt).fromNow()}</span>
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
