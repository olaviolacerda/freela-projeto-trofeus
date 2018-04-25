import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';

const Routes = withRouter(({ history }) => (
    <ReactCSSTransitionGroup
        transitionName='App'
        transitionEnterTimeout={500} transitionLeaveTimeout={300}
    >
        <Switch key={history.location.pathname} pathname={history.location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="*" component={NotFound} />
            <Redirect to="/" />
        </Switch>
    </ReactCSSTransitionGroup>
));

ReactDOM.render(
    (
        <Router>
            <App >
                <Routes />
            </App>
        </Router>

    ),
    document.querySelector('#root'));
registerServiceWorker();
