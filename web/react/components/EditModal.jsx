/**
 * Created by lingyu on 18/5/28.
 */
'use strict';

import React from 'react';
const _ = require('lodash');

import { decorateModal, isFloatNumber } from '../../common/utils';

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    let price = this.props.price;
    console.log('EditModal', price);
    this.state = {
      roomName: price.roomName,
      price: price.price
    };
  }

  handleChange(key, e) {
    let value = e.target.value;
    if(key === 'price' && !isFloatNumber(value)) return;
    let newState = _.cloneDeep(this.state);
    newState[key] = value;
    this.setState(newState);
  }

  modifyRoomInfo() {
    this.props.modifyRoomInfo({
      roomName: this.state.roomName,
      price: this.state.price,
      property: this.props.property
    });
  }


  render() {
    let { roomName, price } = this.state;
    return (
      <div className="modal fade edit-modal" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">
                <span>Edit Room</span>
              </h3>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <div>
                <p>Room name</p>
                <input type="text" value={roomName} className="custom-input edit-input"
                       onChange={this.handleChange.bind(this, 'roomName')}/>
              </div>
              <div>
                <p>Price</p>
                <input type="text" value={price} className="custom-input edit-input"
                       onChange={this.handleChange.bind(this, 'price')}/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" className="btn btn-primary" onClick={() => this.modifyRoomInfo()}>确认</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
decorateModal(EditModal, 'edit-modal');
export default EditModal;


