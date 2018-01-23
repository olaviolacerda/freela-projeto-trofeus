import React, { Component } from 'react';
import './css/App.scss';
import './css/bootstrap.scss';
import './css/style.scss';
import './css/animate.scss';
import './css/simple-line-icons.scss';
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
