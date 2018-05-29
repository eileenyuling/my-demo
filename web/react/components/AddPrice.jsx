/**
 * Created by lingyu on 18/5/28.
 */
'use strict';

import React from 'react';
const _ = require('lodash');
require('../../images/tooltip.svg');
import { isFloatNumber } from '../../common/utils';

class AddPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: '',
      price: '',
      isPriceFormValid: 'true',
      property: this.props.property,
      isTooltipShow: false
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      property: props.property
    });

  }

  handleChange(key, e) {
    let value = e.target.value;
    if(key === 'price' && !isFloatNumber(value)) return;
    let newState = _.cloneDeep(this.state);
    newState[key] = value;
    this.setState(newState);
  }

  addPrice() {
    this.setState({
      isPriceFormValid: true
    });
    if(!this.state.roomName || !this.state.price) {
      this.setState({
        isPriceFormValid: false
      });
      return;
    }
    this.props.addPrice({
      roomName: this.state.roomName,
      price: this.state.price,
      property: this.state.property
    });
  }

  toggleTooltip(value) {
    this.setState({
      isTooltipShow: value
    });
  }

  render() {
    let { roomName, price, isPriceFormValid, property} = this.state;
    return (
      <div className="add-price">
        <div className="row">
          <input type="text" className={'custom-input col-sm-8' + `${isPriceFormValid || roomName  ? '' : ' error-border'}`}
                 placeholder="Room name" value={roomName}
                 onChange={this.handleChange.bind(this, 'roomName')} required/>
          <div className="price-input">
            <input type="text" className={'custom-input'  + `${isPriceFormValid || price  ? '' : ' error-border'}`} placeholder="Price"
                   value={price} onChange={this.handleChange.bind(this, 'price')} required/>
            <img className="price-tooltip" src="/static/dist/images/tooltip.svg"
                 onClick={() => this.toggleTooltip(true)} onBlur={() => this.toggleTooltip(false)}  tabIndex="0"/>
            {this.state.isTooltipShow
              ?
              <div>
                <div className="triangle-down"></div>
                <div className="tooltip-text">{property ? 'Price are based with currency ' + property.currency : '请先选择property'}</div>
              </div>
              : null
            }
          </div>

        </div>
        <div className="btn btn-primary add-btn" onClick={this.addPrice.bind(this)}>Add</div>
      </div>
    );
  }
}

export default AddPrice;


