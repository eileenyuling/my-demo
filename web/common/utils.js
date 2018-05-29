/**
 * Created by lingyu on 18/5/28.
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

const isFloatNumber = function(text){
  const regExp = /^\d*(\.\d{0,2})?$/;
  return regExp.test(text);
};

function getShowModalFunction(JSXElement, id) {
  return function(params) {
    let modal = React.cloneElement(JSXElement, params);
    let modalContainer = document.createElement('div');
    modalContainer.id = id;
    document.body.appendChild(modalContainer);
    ReactDOM.render(modal, modalContainer, function() {
      let modalObj = $('#' + id + '>.modal');
      modalObj.modal('show');
      modalObj.on('hidden.bs.modal', function() {
        ReactDOM.unmountComponentAtNode(modalContainer);
        modalContainer.remove();
      });
    }.bind(this));
  };
}
function getHideModalFunction(modalId) {
  return function() {
    let modalObj = $('#' + modalId + '>.modal');
    modalObj.modal('hide');
  };
}

function decorateModal(modalClass, modalId) {
  modalClass.show = getShowModalFunction(React.createElement(modalClass), modalId);
  modalClass.hide = getHideModalFunction(modalId);
}

function filterCurrency(currency) {
  switch(currency) {
    case 'GBP':
      return '£';
    case 'AUD':
      return '$A';
    case 'USD':
      return '$US'
  }
}

export {
  isFloatNumber,
  decorateModal,
  filterCurrency
}
 
 
