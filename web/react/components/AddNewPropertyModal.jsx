/**
 * Created by lingyu on 18/5/28.
 */
'use strict';

import React from 'react';
const _ = require('lodash');
const properties = require('../../properties.json');

import { decorateModal } from '../../common/utils';
// import { isFloatNumber } from '../../common/utils';
import AddPrice from './AddPrice';

class AddNewPropertyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPriceFormValid: true,
      selectedProperty: null
    }
  }

  addPrice(params) {
    if(!this.state.selectedProperty) {
      this.setState({
        isPriceFormValid: false
      });
      return;
    }
    this.props.addPrice(params, 'closeModal');
  }

  selectProperty(e) {
    let selectedProperty = JSON.parse(e.target.value);
    this.setState({
      selectedProperty: selectedProperty
    });
  }

  render() {
    let {isPriceFormValid, selectedProperty} = this.state;
    return (
      <div className="modal fade add-new-property-modal" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">
                <span>Add new property</span>
              </h3>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <div className="component-title">Property name</div>
              <select className={'custom-input select' + `${isPriceFormValid || selectedProperty  ? '' : ' error-border'}`} onChange={this.selectProperty.bind(this)}>
                <option></option>
                {properties.map((item, index) => {
                  return <option key={index} value={JSON.stringify(item)}>{item.name}</option>
                })}
              </select>
              <div className="component-title">Price</div>
              <AddPrice property={selectedProperty} addPrice={this.addPrice.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

decorateModal(AddNewPropertyModal, 'add-new-property-modal');
export default AddNewPropertyModal;


