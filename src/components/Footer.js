import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer id="" role="">

                <div className="grid-container align-center">
                    <div className="row">
                        <div className="row">
                            <div className="col-10 col-2-fill">
                                <h3>About Us</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-10 col-2-fill">
                                <p>&copy; 2016 Free HTML5 template. All Rights Reserved. <span>Designed with <i className="icon-heart"></i> by <a href="http://freehtml5.co/" target="_blank" rel="noopener noreferrer">FreeHTML5.co</a> Demo Images by <a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}