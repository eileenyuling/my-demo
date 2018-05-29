/**
 * Created by lingyu on 18/5/26.
 */
'use strict';

import React from 'react';
import { withRouter } from 'react-router-dom';
require('../../../images/tab-icon-edit.svg');
require('../../../images/tab-icon-list.svg');

class Sidebar extends React.Component {
  changeRoute(route) {
    this.props.history.push(route);
  }
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-item" onClick={this.changeRoute.bind(this, '/list')}>
          <div className="active-icon"></div>
          <img src="/static/dist/images/tab-icon-list.svg" className="tab-icon"/>
          <span className="item-name">List</span>
        </div>
        <div className="sidebar-item" onClick={this.changeRoute.bind(this, '/edit')}>
          <div className="active-icon"></div>
          <img src="/static/dist/images/tab-icon-edit.svg" className="tab-icon"/>
          <span className="item-name">Edit</span>
        </div>
        <div className="sidebar-toggle-wrapper">
          <div className="sidebar-toggle">&lt;</div>
        </div>

      </div>
    );
  }
}

export default withRouter(Sidebar);


