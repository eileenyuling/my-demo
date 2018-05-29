/**
 * Created by lingyu on 18/5/26.
 */
'use strict';

import React from 'react';
import { filterCurrency } from '../../common/utils';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="list">
        <div className="page-title">Property List</div>
        {this.props.prices.map((price, index) => {
          return <div key={index} className="list-item">
            <div className="component-title">{price.property.name}</div>
            <table className="table table-bordered">
              <tbody>
              <tr className="table-header">
                <td>Room name</td>
                <td>Price(per week)</td>
              </tr>
              {price.data.map((item, itemIndex) => {
                return <tr key={itemIndex}>
                  <td>{item.roomName}</td>
                  <td>{filterCurrency(price.property.currency)} {item.price}</td>
                </tr>
              })}
              </tbody>

            </table>

          </div>
        })}
      </div>
    );
  }
}

export default List;


