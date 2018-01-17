import React, { Component } from 'react';
import '../src/css/bootstrap.css';
import '../src/css/style.css';
import '../src/css/animate.css';
import '../src/css/simple-line-icons.css';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import ServiceSection from './components/ServiceSection';
import GallerySection from './components/GallerySection';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';

class App extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionname="App"
        timeout ={500}
        transitionentertimeout={500}
        transitionleavetimeout={300}>
        <div className="App">
          <Header />
          <IntroSection />
          <ServiceSection />
          <GallerySection />
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default App;
