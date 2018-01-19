import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css';
import './css/style.css';
import './css/animate.css';
import './css/simple-line-icons.css';
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
