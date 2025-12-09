import express from 'express';
import {
  getProjects,
  createProject,
  deleteProject,
} from '../controllers/project.controller.js';
import upload, { processImage } from '../config/multer.config.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', upload.single('image'), processImage, createProject);
router.delete('/:id', deleteProject);

export default router;
