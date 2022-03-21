import express from 'express';
import * as friendsController from '../controllers/friends.controller.js';

const friendsRouter = express.Router();

//we can define custom middleware for each route

friendsRouter.post('/', friendsController.postFriends);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendID', friendsController.getIndividualfriends);

export{ friendsRouter };