'use strict';

import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  _id: String,
  name: String,
  games: [{
    type: Schema.Types.ObjectId, ref: 'Game'
  }],
  roundsPlayed: Number,
  winningRounds: Number
});

var User = mongoose.model('User', UserSchema);

export { User };