import express from "express";
import { getEvents, getEventById, createEvent, updateEvent, deleteEvent } from '../controllers/Event.js';

const router = express.Router();

router.get('/events', getEvents);
router.get('/events/:id', getEventById);
router.post('/events', createEvent);
router.patch('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);

export default router;