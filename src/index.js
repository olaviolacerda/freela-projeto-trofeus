import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import EasterEgg from './pages/EasterEgg';
import NotFound from './pages/NotFound';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

console.log("habemus aws && heroku && scss")
const Routes = withRouter(({ history }) => (
    <ReactCSSTransitionGroup
        transitionName='App'
        transitionEnterTimeout={500} transitionLeaveTimeout={300}
    >
        <Switch key={history.location.pathname} pathname={history.location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/faith" component={EasterEgg} />
            <Route exact path="*" component={NotFound} />
        </Switch>
    </ReactCSSTransitionGroup>
));

ReactDOM.render(
    (
        <Router>
            <App>
                <Routes />
            </App>
        </Router>

    ),
    document.querySelector('#root'));
registerServiceWorker();
