'use strict';

var CardController = {

  // Returns the card's text
  getCardInfo: (request, response) => {
    response.json({success:true,data:{}});
  }

}

export { CardController };
