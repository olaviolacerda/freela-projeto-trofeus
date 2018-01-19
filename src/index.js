import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
    (
            <Router>
                <App>
                    <Switch >
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                </App>
            </Router>
       
    ),
    document.querySelector('#root'));
registerServiceWorker();
