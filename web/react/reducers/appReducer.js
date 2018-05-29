/**
 * Created by lingyu on 18/5/27.
 */
'use strict';

import { combineReducers } from 'redux';
import propertyReducer from './propertyReducer';

const appReducer = combineReducers({
  propertyReducer
});

export default appReducer;
