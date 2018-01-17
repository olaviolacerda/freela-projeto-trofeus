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

import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';


ReactDOM.render(
    (
        <Router>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/gallery" component={Gallery} />
                <Route path="/services" component={Services} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    ),
    document.querySelector('#root'));
registerServiceWorker();
