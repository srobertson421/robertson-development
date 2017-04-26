import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { db } from '../../services/firebase-service';

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitle: '',
      editorState: '',
      publish: false
    }
  }

  titleChangeHandler(event) {
    this.setState({postTitle: event.target.value});
  }

  editorChangeHandler(newState) {
    if(newState === '<p><br></p>') {
      this.setState({editorState: ''});
      return;
    }

    this.setState({editorState: newState});
  }

  publishChangeHandler(event) {
    let newPublish = !this.state.publish;
    this.setState({publish: newPublish});
  }

  submitPost(event) {
    db.ref('posts').push({
      title: this.state.postTitle,
      content: this.state.editorState,
      published: this.state.publish,
      createdAt: new Date().toISOString()
    }).then(() => {
      this.setState({
        postTitle: '',
        editorState: '',
        publish: false
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div id="postEditor">
        <h4>New Post</h4>
        <input type="text" className="u-full-width" placeholder="Enter Post Title" value={this.state.postTitle} onChange={(event) => {this.titleChangeHandler(event)}}  />
        <ReactQuill
          theme="snow"
          value={this.state.editorState}
          onChange={(newState) => {this.editorChangeHandler(newState)}}
          modules={PostEditor.modules}
          formats={PostEditor.formats}
        />
        <label>
          <input type="checkbox" onChange={(event) => {this.publishChangeHandler(event)}} />
          <span className="label-body">Publish</span>
        </label>
        <button onClick={(event) => {this.submitPost(event)}}>Submit</button>
      </div>
    );
  }
}

PostEditor.modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }, { 'font': [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ]
}

PostEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

export default PostEditor;
