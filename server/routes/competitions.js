import express from 'express';
import { getCompetitions, createCompetition, updateCompetition, deleteCompetition, getCompetition, getCompetitionsBySearch, buyTicket} from '../controllers/competitions.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getCompetitions);
router.get('/search', getCompetitionsBySearch);
router.get('/:id', getCompetition);
router.post('/', auth, createCompetition);
router.patch('/:id', auth, updateCompetition);
router.delete('/:id', auth, deleteCompetition);
router.post('/:id/buy', auth, buyTicket);
 
export default router;