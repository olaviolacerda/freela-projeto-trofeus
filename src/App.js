import React, { Component } from 'react';
import './css/index.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileHeader from './components/MobileHeader';

class App extends Component {



  render() {
    return (
      <div className="grid-container ">
        <div className="row">
          {
            window.innerWidth >= 825 ? <Header /> : <MobileHeader />
          }
        </div>
        <div className="row">
          <div className="wrapper col-12 ">
            {this.props.children}
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
