import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './View/Home/index';
import Registration from './View/Registration/index';
import Plan from './View/Plan/index';
import Billing from './View/Billing/index';


// ReactDOM.render(<App />, document.getElementById('root'));

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Registration" component={Registration} />
            <Route path="/Plan" component={Plan} />
            <Route path="/Billing" component={Billing} />
            {/* <Route component={Notfound} /> */}
        </Switch>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
