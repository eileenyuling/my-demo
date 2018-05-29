/**
 * Created by lingyu on 18/5/26.
 */
'use strict';

import React from 'react';
const _ = require('lodash');
import { filterCurrency } from '../../common/utils';
import AddNewPropertyModal from './AddNewPropertyModal';
import EditModal from './EditModal';
import AddPrice from './AddPrice';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProperty: {},
      isTooltipShow: false
    }
  }

  componentDidMount() {
    this.props.getAddedProperties();
  }

  addNewProperty() {
    AddNewPropertyModal.show({
      addPrice: this.addPrice.bind(this)
    });
  }

  showEditModal(price, index) {
    EditModal.show({
      price: price,
      property: this.state.currentProperty,
      modifyRoomInfo: (params) => this.props.modifyRoomInfo({
        roomName: params.roomName,
        price: params.price,
        index: index,
        property: this.state.currentProperty,
        callback: this.closeModal()
      })
    });
  }

  closeModal() {
    EditModal.hide();
  }

  addPrice(params, operate) {
    this.props.addPrice(params, function() {
      if(operate === 'closeModal') {
        AddNewPropertyModal.hide();
      }
    });
  }

  changeCurrentProperty(property) {
    this.setState({
      currentProperty: property
    });
  }

  filterPrices(prices, propertyId) {
    return prices.find((item) => {
      return item.property.id === propertyId;
    });
  }

  render() {
    let { currentProperty} = this.state;
    let { addedProperties } = this.props;
    let prices = this.filterPrices(this.props.prices, currentProperty.id);
    prices = prices || {data: []};
    return (
      <div className="edit">
        <div>
          <span className="page-title">Edit Properties</span>
          <div className="btn btn-primary pull-right" onClick={this.addNewProperty.bind(this)}>Add new property</div>
        </div>

          <div className="properties row">
            {addedProperties
              ?
              <div className="property-list col-sm-3">
                {addedProperties.map((property, index) => {
                  return <div key={index}
                              className={'property-item' + `${currentProperty.id === property.id ? ' selected-property' : ''}`}
                              onClick={this.changeCurrentProperty.bind(this, property)}>
                    {property.name}
                  </div>
                })}
              </div>
              : null
            }
            {currentProperty && currentProperty.id
              ?
              <div className="property-content col-sm-9">
                <div className="component-title">Price</div>
                <table className="table table-bordered">
                  <tbody>
                  <tr>
                    <td>Room name</td>
                    <td>Price(per week)</td>
                    <td>Actions</td>
                  </tr>
                  {prices.data.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.roomName}</td>
                      <td>{filterCurrency(currentProperty.currency)} {item.price}</td>
                      <td className="text-center">
                        <a href="javascript:;" className="operate" onClick={this.showEditModal.bind(this, item, index)}>Edit</a>
                      </td>
                    </tr>
                  })}
                  </tbody>
                </table>
                <AddPrice property={currentProperty} addPrice={this.addPrice.bind(this)}/>
              </div>
              : null

            }

          </div>
      </div>
    );
  }
}

export default Edit;


