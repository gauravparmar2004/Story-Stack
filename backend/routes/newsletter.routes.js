import express from 'express';
import {
  getSubscribers,
  subscribeNewsletter,
} from '../controllers/newsletter.controller.js';

const router = express.Router();

router.get('/', getSubscribers);
router.post('/', subscribeNewsletter);

export default router;
