import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Resources from './pages/Resources/Resources';
import Services from './pages/Services/Services';
import Blog from './pages/Blog/Blog';
import Testimonials from './pages/Testimonials/Testimonials';
import ViewPost from './pages/ViewPost/ViewPost';
import Admin from './pages/Admin/Admin';

import Navbar from './components/Navbar/Navbar';

import { db, auth } from './services/firebase-service';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "user": null,
      publishedPosts: [],
      posts: [],
      postsObj: {}
    }
  }

  componentDidMount() {
    db.ref('posts').on('value', (snapshot) => {
      let postArr = [];
      let publishedPostsArr = [];
      let posts = snapshot.val();
      for(let key in posts) {
        let post = posts[key];
        post.id = key;

        if(post.published) {
          publishedPostsArr.push(post);
        }

        postArr.push(post);
      }

      let sortedPostsArr = publishedPostsArr.sort(function(a, b) {
          a = new Date(a.createdAt);
          b = new Date(b.createdAt);
          return a>b ? -1 : a<b ? 1 : 0;
      });

      console.log(sortedPostsArr);

      this.setState({posts: sortedPostsArr, publishedPosts: publishedPostsArr, postsObj: posts});
    });

    auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({user: user});
        localStorage.setItem('robertsonAdmin', JSON.stringify({email: user.email, uid: user.uid}));
      } else {
        this.setState({user: null});
        localStorage.removeItem('robertsonAdmin');
      }
    });
  }

  render() {
    return (
      <Router>
        <div id="main-container">
          <Navbar isLoggedIn={!!this.state.user} />
          <Route exact path="/" render={(props) => {return this.routeRender(props)}} />
          <Route path="/about"  render={(props) => {return this.routeRender(props)}} />
          <Route path="/contact" render={(props) => {return this.routeRender(props)}} />
          <Route path="/resources" render={(props) => {return this.routeRender(props)}} />
          <Route path="/services" render={(props) => {return this.routeRender(props)}} />
          <Route path="/blog" render={(props) => {
            props.posts = this.state.publishedPosts;
            return this.routeRender(props);
          }} />
          <Route path="/testimonials" render={(props) => {return this.routeRender(props)}} />
          <Route path="/post/:id/:title" render={(props) => {
            return this.routeRender(props);
          }} />
          <Route path="/admin" render={(props) => {
            props.user = this.state.user;
            props.posts = this.state.posts;
            return this.routeRender(props);
          }} />
        </div>
      </Router>
    );
  }

  routeRender(props) {
    props.pageName = props.location.pathname.substring(1, props.location.pathname.length) || 'home';

    if(props.pageName.match('post')) {
      props.pageName = 'post';
    }

    let component;

    switch(props.pageName) {
      case 'home':
        component = (<Home {...props}/>);
        break;
      case 'about':
        component = (<About {...props}/>);
        break;
      case 'resources':
        component = (<Resources {...props}/>);
        break;
      case 'services':
        component = (<Services {...props}/>);
        break;
      case 'blog':
        component = (<Blog {...props}/>);
        break;
      case 'testimonials':
        component = (<Testimonials {...props}/>);
        break;
      case 'contact':
        component = (<Contact {...props}/>);
        break;
      case 'post':
        component = (<ViewPost {...props} />);
        break
      case 'admin':
        component = (<Admin {...props}/>);
        break;
      default:
        component = (<Home {...props}/>);
        break;
    }

    return component;
  }
}

export default App;
