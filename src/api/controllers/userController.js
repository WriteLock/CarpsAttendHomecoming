'use strict';

var UserController = {

  // Registers a new user, can join a game once registered
  createUser: (request, response) => {
    response.json({success:true,data:{}});
  },

  // Returns a user's name, number of games, and total win average
  getUserInfo: (request, response) => {
    response.json({success:true,data:{}});
  },

  // Updates a user's name
  updateUser: (request, response) => {
    response.json({success:true,data:{}});
  },

  // Users are ephemeral, delete their data when they leave
  deleteUser: (request, response) => {
    response.json({success:true,data:{}});
  }

};


export { UserController };