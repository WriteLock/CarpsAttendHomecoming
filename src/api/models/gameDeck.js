'use strict';

import mongoose from 'mongoose';
import './card';

var Schema = mongoose.Schema;

var GameDeckSchema = new Schema({
  _id: Number,
  deckType: {
    type: [{
      type: String,
      enum: ['white', 'black']
    }]
  },
  cards: [{
    type: Schema.Types.ObjectId, ref: 'Card'
  }],
  discardPile: [{
    type: Schema.Types.ObjectId, ref: 'Card'
  }]
});

var GameDeck = mongoose.model('GameDeck', GameDeckSchema);

export { GameDeck };
