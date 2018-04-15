'use strict';

import mongoose from 'mongoose';
import './user';

var Schema = mongoose.Schema;

var GameSchema = new Schema({
  _id: String,
  key: String,
  password: String,
  name: String,
  players: [{
    type: Schema.Types.ObjectId, ref: 'User'
  }],
  rounds: Number,
  whiteCards: [{
    type: Schema.Types.ObjectId, ref: 'GameDeck'
  }],
  blackCards: [{
    type: Schema.Types.ObjectId, ref: 'GameDeck'
  }]
});

var Game = mongoose.model('Game', GameSchema);

export { Game };
