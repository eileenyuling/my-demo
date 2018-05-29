/**
 * Created by lingyu on 18/5/28.
 */
'use strict';
import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = (state) => {
  console.log(state);
  let data = state.propertyReducer;
  return {
    prices: data.prices
  }
};

export default connect(mapStateToProps, null)(List);