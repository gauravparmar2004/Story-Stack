import express from 'express';
import {
  getClients,
  createClient,
  deleteClient,
} from '../controllers/client.controller.js';
import upload, { processImage } from '../config/multer.config.js';

const router = express.Router();

router.get('/', getClients);
router.post('/', upload.single('image'), processImage, createClient);
router.delete('/:id', deleteClient);

export default router;
