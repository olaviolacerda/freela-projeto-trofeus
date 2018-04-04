import React, { Component } from 'react';
import './css/index.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileHeader from './components/MobileHeader';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        {
          window.innerWidth >= 825 ? <Header /> : <MobileHeader />
        }
        <div className="col-11 col-1-fill ">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
