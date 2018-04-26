import React, { Component } from 'react';
import './css/index.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileHeader from './components/MobileHeader';
import $ from 'jquery';

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header-wrapper').outerHeight() === undefined ? 0 : $('header').outerHeight();
$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(window).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down

    $('.header-wrapper').removeClass('show-menu').addClass('hide-menu');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('.header-wrapper').removeClass('hide-menu').addClass('show-menu');
    }
  }

  lastScrollTop = st;
}



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
