'use strict';
 
import { UserController } from '../controllers/userController';
import { GameController } from '../controllers/gameController';
import { DeckController } from '../controllers/deckController';
import { CardController } from '../controllers/cardController';

export function configure(express) {
  var router = express.Router();

  router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
  });

  // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
  router.get('/', function(req, res) {
    res.json({ success: true, data: {message: 'The API is working!'} });   
  });

  // -------------------------------
  // User Routes
  router.post('/user/', UserController.createUser);

  router.route('/user/:userId')
    .get(UserController.getUserInfo)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser);

  // -------------------------------
  // Game Routes
  router.post('/game/', GameController.createGame);

  router.route('/game/:gameId')
    .get(GameController.getGameInfo)
    .patch(GameController.joinGame)
    .delete(GameController.leaveGame);

  router.get('/game/:gameId/draw/:cardType/:count?', GameController.drawCard);

  router.put('/game/:gameId/mulligan', GameController.mulligan);

  router.route('/game/:gameId/deck/')
    .get(GameController.getFullDeckInfo)
    .put(GameController.shuffleDeck);

  // -------------------------------
  // Deck Routes
  router.get('/deck/', DeckController.getFullDeckInfo);

  router.get('/deck/:deckType', DeckController.getDeckInfo);

  // -------------------------------
  // Cards Routes
  router.get('/cards/:cardId', CardController.getCardInfo);

  return router;
};