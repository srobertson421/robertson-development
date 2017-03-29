import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Resources from './pages/Resources/Resources';
import Services from './pages/Services/Services';
import Testimonials from './pages/Testimonials/Testimonials';

import Navbar from './components/Navbar/Navbar';

import { db } from './services/firebase-service';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "siteContent" : {
        "pages" : {
          "about" : {
            "mainText" : {
              "lede" : "",
              "line1" : "",
              "line2" : "",
              "line3" : "",
              "line4" : "",
              "line5" : "",
              "line6" : "",
              "type" : ""
            }
          },
          "contact" : {
            "mainText" : {
              "line1" : "",
              "line2" : "",
              "line3" : "",
              "line4" : "",
              "line5" : "",
              "type" : ""
            }
          },
          "home" : {
            "mainText" : {
              "text" : "",
              "type" : ""
            }
          },
          "resources" : {
            "mainText" : {
              "lede" : "",
              "line1" : "",
              "line2" : "",
              "line3" : "",
              "line4" : "",
              "type" : ""
            },
            "secondaryText" : ""
          },
          "services" : {
            "mainText" : {
              "lede" : "",
              "listItems" : {
                "1": '',
                "2": '',
                "3": '',
                "4": '',
                "5": '',
                "6": '',
                "7": '',
                "8": '',
                "9": '',
                "10": '',
                "11": '',
                "12": ''
              },
              "type" : ""
            }
          },
          "testimonials" : {
            "mainText" : {
              "line1" : "",
              "line2" : "",
              "line3" : "",
              "line4" : "",
              "line5" : "",
              "type" : ""
            }
          }
        }
      }
    }
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
          <Route path="/resources" render={(props) => {return this.routeRender(props)}} />
          <Route path="/services" render={(props) => {return this.routeRender(props)}} />
          <Route path="/testimonials" render={(props) => {return this.routeRender(props)}} />
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
      case 'resources':
        component = (<Resources {...props}/>);
        break;
      case 'services':
        component = (<Services {...props}/>);
        break;
      case 'testimonials':
        component = (<Testimonials {...props}/>);
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
