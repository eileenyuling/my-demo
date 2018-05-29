/**
 * Created by lingyu on 18/5/27.
 */
'use strict';
function saveAddedProperties(data) {
  return {
    type: 'SAVE_ADDED_PROPERTIES',
    properties: data
  };
}


function addPrice(params) {
  return {
    type: 'ADD_PRICE',
    params: params
  };
}

function modifyRoomInfo(params) {
  return {
    type: 'MODIFY_ROOM_INFO',
    params: params
  }
}

export {
  saveAddedProperties,
  addPrice,
  modifyRoomInfo
}
 
 
