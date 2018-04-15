'use strict';

import mongoose from 'mongoose';
import uuidv4 from 'uuid/v4';

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  _id: { type: String, default: uuidv4 },
  name: String,
  key: String,
  dateCreated: { type: Date, default: Date.now },
  games: [{
    type: Schema.Types.ObjectId,
    ref: 'Game'
  }],
  roundsPlayed: Number,
  winningRounds: Number
});

var User = mongoose.model('User', UserSchema);

export { User };