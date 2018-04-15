'use strict';

import mongoose from 'mongoose';
import uuidv4 from 'uuid/v4';

import { User } from '../models/user';

var UserController = {

  // Registers a new user, can join a game once registered
  createUser: (request, response) => {
    var user = new User();
    user.name = request.body.name;
    user.key = uuidv4().replace(/[^a-z0-9]*/gi, '').substr(2,8);

    user.save(
      (err, newUser) => {
        if (err)
          response.send({
            success: false,
            message: err
          });

        response.json({ 
          success: true,
          data: {
            id: newUser._id,
            name: newUser.name,
            key: newUser.key,
            games: newUser.games 
          }
        });
      }
    );
  },

  // Returns a user's name, number of games, and total win average
  getUserInfo: (request, response) => {
    if (request.params.userId) {
      User.findById(
        request.params.userId,
        (err, userRecord) => {
          if (err)
            response.send({
              success: false,
              message: err
            });

          response.json({ 
            success: true,
            data: userRecord
          });
        }
      );
    } else if (request.params.userKey) {
      User.findOne(
        {key: request.params.userKey},
        (err, userRecord) => {
          if (err)
            response.send({
              success: false,
              message: err
            });

          response.json({ 
            success: true,
            data: userRecord
          });
        }
      );
    } else if (request.params.userName) {
      User.find(
        {name: {"$regex": '^'+request.params.userName, "$options": 'i'}},
        (err, userRecords) => {
          if (err)
            response.send({
              success: false,
              message: err
            });

          response.json({ 
            success: true,
            data: userRecords
          });
        }
      );
    } else {
      // Nothing to search for
      response.json({ 
        success: true,
        data: []
      });
    }

  },

  // Updates a user's name
  updateUser: (request, response) => {
    User.findOne(
      {
        _id: request.params.userId,
        key: request.body.key
      },
      (err, userRecord) => {
        if (err)
          response.send({
            success: false,
            message: err
          });

        if (userRecord) {
          userRecord.name = request.body.name;
          userRecord.save();
          response.json({success: true, data: {
            id: userRecord._id,
            name: userRecord.name,
          }});
        } else {
          response.json({success: false, data: {message: "User not found."}});
          
        }
      }
    );
  },

  // Users are ephemeral, delete their data when they leave
  deleteUser: (request, response) => {
    User.findOne(
      {
        _id: request.params.userId,
        key: request.body.key
      },
      (err, userRecord) => {
        if (err)
          response.send({
            success: false,
            message: err
          });

        if (userRecord) {
          userRecord.remove();
          response.json({success: true, data: {
            id: userRecord._id,
            name: userRecord.name,
          }});
        } else {
          response.json({success: false, data: {message: "User not found."}});
          
        }
      }
    );
  }

};


export { UserController };