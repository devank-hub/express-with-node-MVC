import express from 'express';
import * as messagesController from '../controllers/messages.controller.js';

const messagesRouter = express.Router();

messagesRouter.post('/', messagesController.postMessages);
messagesRouter.get('/', messagesController.getMessages);

export { messagesRouter };