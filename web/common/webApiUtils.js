/**
 * Created by lingyu on 18/5/27.
 */
'use strict';

import api from './api';

function getAddedProperties(successCB, errorCB) {
  $.get(api.PROPERTY).done(successCB).fail(errorCB);
}

export {
  getAddedProperties
}
 
 
