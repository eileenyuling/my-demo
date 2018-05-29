/**
 * Created by lingyu on 18/5/24.
 */
'use strict';

import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, Link
} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../stylesheets/app';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import List from './containers/List';
import Edit from './containers/Edit';

// const App = () => (
//   <Switch>
//     <Route path="/app/list" component={List}/>
//     <Route path="/app/edit" component={Edit}/>
//   </Switch>
// );

const Routes = () => (
  <Router>
    <div className="main-wrapper">
      <div className="header-wrapper">
        <Header/>
      </div>
      <div className="content-wrapper" >
        <Sidebar />
        <div className="content">
          {/*<Route path="/app" component={App}/>*/}
          <Switch>
            <Route path="/list" component={List}/>
            <Route path="/edit" component={Edit}/>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default Routes;

// ReactDOM.render(<Routes />, document.getElementById('root'));


