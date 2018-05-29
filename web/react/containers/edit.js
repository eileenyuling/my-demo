/**
 * Created by lingyu on 18/5/27.
 */
'use strict';

import { connect } from 'react-redux';
import Edit from '../components/Edit';
import { getAddedProperties } from '../../common/webApiUtils';
import { saveAddedProperties, addPrice, modifyRoomInfo } from '../actions/propertyActions';

const mapStateToProps = (state) => {
  let data = state.propertyReducer;
  return {
    addedProperties: data.properties,
    prices: data.prices
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAddedProperties: function(){
      getAddedProperties(function(data){
        dispatch(saveAddedProperties(data));
      }, function(){

      });
    },

    addPrice: function(params, callback) {
      dispatch(addPrice(params));
      callback();
    },

    modifyRoomInfo: function(params, callback){
      dispatch(modifyRoomInfo(params));
      callback();
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
 
 
