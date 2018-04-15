'use strict';

var GameController = {

  // Creates a new game at a user's request
  createGame: (request, response) => {
    response.json({success:true,data:{}});
  },

  // Returns basic game info: name, key, players, rounds
  getGameInfo: (request, response) => {
    response.json({success:true,data:{}});
  },

  // Joins the current user to a game
  joinGame: (request, response) => {
    response.json({success:true,data:{}});
  },

  // Removes a player from a game
  leaveGame: (request, response) => {
    response.json({success:true,data:{}});
  },

  // Draws a card from the game's deck and returns it to the current user
  drawCard: (request, response) => {
    response.json({success:true,data:{}});
  },

  // Discards all of a user's cards and givesthe user 10 more
  mulligan: (request, response) => {
    response.json({success:true,data:{}});
  },

  // Returns basic info about the games' decks
  getFullDeckInfo: (request, response) => {
    response.json({success:true,data:{}});
  },

  // Shuffles all the discarded cards back into the draw pile
  shuffleDeck: (request, response) => {
    response.json({success:true,data:{}});
  }
}

export { GameController };





