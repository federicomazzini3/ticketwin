import express from 'express';
import { getCompetitions, createCompetition} from '../controllers/competitions.js';

const router = express.Router();

router.get('/', getCompetitions);
router.get('/', createCompetition);

export default router;