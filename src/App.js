import React, { Component } from 'react';
import './css/index.scss';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment >
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
