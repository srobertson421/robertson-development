import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import Navbar from './components/Navbar/Navbar';

import { db } from './services/firebase-service';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteContent: {
        pages: {
          home: {
            mainText: ''
          },
          about: {
            mainText: ''
          },
          contact: {
            mainText: ''
          }
        }
      }
    };
  }

  componentDidMount() {
    db.ref('content').on('value', (snapshot) => {
      this.setState({siteContent: snapshot.val()});
    });
  }

  render() {
    return (
      <Router basename="/robertson-development">
        <div id="main-container">
          <Navbar />
          <Route exact path="/" render={(props) => {return this.routeRender(props)}} />
          <Route path="/about"  render={(props) => {return this.routeRender(props)}} />
          <Route path="/contact" render={(props) => {return this.routeRender(props)}} />
        </div>
      </Router>
    );
  }

  routeRender(props) {
    props.pageName = props.location.pathname.substring(1, props.location.pathname.length) || 'home';
    props.pageData = this.state.siteContent.pages[props.pageName];

    let component;

    switch(props.pageName) {
      case 'home':
        component = (<Home {...props}/>);
        break;
      case 'about':
        component = (<About {...props}/>);
        break;
      case 'contact':
        component = (<Contact {...props}/>);
        break;
      default:
        component = (<Home {...props}/>);
        break;
    }

    return component;
  }
}

export default App;
