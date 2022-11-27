import express from 'express';
import { getCompetitions, createCompetition} from '../controllers/competitions.js';

const router = express.Router();

router.get('/', getCompetitions);
router.post('/', createCompetition);

export default router;