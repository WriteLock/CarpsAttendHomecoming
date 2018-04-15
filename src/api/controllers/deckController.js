'use strict';

var DeckController = {

  // Returns the details about all cards of all types
  getFullDeckInfo: (request, response) => {
    response.json({success:true,data:{}});
  },

  // Returns the details of all the cards of a certain type
  getDeckInfo: (request, response) => {
    response.json({success:true,data:{}});
  }

};

export { DeckController };