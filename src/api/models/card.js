'use strict';

import mongoose from 'mongoose';
import './deck';

var Schema = mongoose.Schema;

var CardSchema = new Schema({
  _id: Number,
  deck: [{
    type: Schema.Types.ObjectId, ref: 'Deck'
  }],
  text: String
});

var Card = mongoose.model('Card', CardSchema);

export { Card };
