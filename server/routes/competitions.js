import express from 'express';
import { getCompetitions, createCompetition, updateCompetition, deleteCompetition} from '../controllers/competitions.js';

const router = express.Router();

router.get('/', getCompetitions);
router.post('/', createCompetition);
router.patch('/:id', updateCompetition);
router.delete('/:id', deleteCompetition);

export default router;