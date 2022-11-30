import express from 'express';
import { getCompetitions, createCompetition, updateCompetition, deleteCompetition, getCompetition} from '../controllers/competitions.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getCompetitions);
router.get('/:id', getCompetition);
router.post('/', auth, createCompetition);
router.patch('/:id', auth, updateCompetition);
router.delete('/:id', auth, deleteCompetition);

export default router;