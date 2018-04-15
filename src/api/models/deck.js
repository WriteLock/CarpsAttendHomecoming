'use strict';

import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var DeckSchema = new Schema({
  type: {
    type: [{
      type: String,
      enum: ['white', 'black']
    }]
  },
  cards: [{
    type: Schema.Types.ObjectId, ref: 'Card'
  }]
});

var Deck = mongoose.model('Deck', DeckSchema);

export { Deck };
