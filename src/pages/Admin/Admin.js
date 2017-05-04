import React, { Component } from 'react';
import PostEditor from '../../components/PostEditor/PostEditor';
import PostList from '../../components/PostList/PostList';
import { auth } from '../../services/firebase-service';

import './Admin.css';

class Admin extends Component {
  render() {
    return (
      this.props.user ?
        <div className="container">
          <div className="row">
            <div className="twelve columns content-area">
              <h3 className="page-header">Admin</h3>
              <button onClick={(e) => {this.logout(e)}}>Logout</button>
              <div className="row">
                <PostEditor />
                <h4 class="posts-header">Posts</h4>
                <PostList posts={this.props.posts} />
              </div>
            </div>
          </div>
        </div>
      :
        <div className="container">
          <div className="row">
            <div className="twelve columns content-area">
              <form onSubmit={(e) => {this.login(e)}}>
                <label htmlFor="login-email">Email</label>
                <input className="u-full-width" name="adminEmail" type="email" placeholder="Enter admin email" id="login-email" />
                <label htmlFor="login-password">Password</label>
                <input className="u-full-width" name="adminPassword" type="password" placeholder="Enter admin password" id="login-password" />
                <input className="login-button" type="submit" value="Login" />
              </form>
            </div>
          </div>
        </div>
    );
  }

  login(e) {
    e.preventDefault();
    const email = e.target.adminEmail.value;
    const password = e.target.adminPassword.value;

    auth.signInWithEmailAndPassword(email, password).catch((err) => {
      console.log(err);
    });
  }

  logout(e) {
    auth.signOut().catch((err) => {
      console.log(err);
    });
  }
}

export default Admin;
