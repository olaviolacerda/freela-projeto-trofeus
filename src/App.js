import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/style.css';
import './css/animate.css';
import './css/simple-line-icons.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  render() {
    return (
      <React.Fragment >
         <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
        <Header />
        {this.props.children}
        <Footer />
        </CSSTransitionGroup>
      </React.Fragment>

    );
  }
}

export default App;
