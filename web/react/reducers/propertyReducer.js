/**
 * Created by lingyu on 18/5/27.
 */
'use strict';

const _ = require('lodash');

const propertyReducer = function(state = { properties: [], prices: [] }, action) {
  let newState = _.cloneDeep(state);
  let prices, params, priceIndex;
  switch(action.type){
    case 'SAVE_ADDED_PROPERTIES':
      newState.properties = action.properties;
      return newState;
    case 'ADD_PRICE':
      prices = _.cloneDeep(state.prices);
      params = action.params;
      priceIndex = prices.findIndex((item) => {
        return item.property.id === params.property.id;
      });
      if(priceIndex > -1) {
        prices[priceIndex].data.push({
          roomName: params.roomName,
          price: params.price
        });
      } else {
        let addedProperties = _.cloneDeep(state.properties);
        let propertyIndex = addedProperties.findIndex((item) => {
          return item.id === params.property.id;
        });

        if(propertyIndex < 0) {
          addedProperties.push(params.property);
          newState.properties = addedProperties;
        }
        prices.push({
          property: params.property,
          data: [{
            roomName: params.roomName,
            price: params.price
          }]
        });
      }
      newState.prices = prices;
      return newState;
    case 'MODIFY_ROOM_INFO':
      prices = _.cloneDeep(state.prices);
      params = action.params;
      priceIndex = prices.findIndex((item) => {
        return item.property.id === params.property.id;
      });
      prices[priceIndex].data[params.index] = {
        roomName: params.roomName,
        price: params.price
      };
      newState.prices = prices;
      return newState;
    default:
      return state;
  }
};

export default propertyReducer;
 
 
