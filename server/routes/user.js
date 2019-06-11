import express from 'express';
import { signup, signin } from '../controllers/user';
import validate from '../middlewares/user';

const router = express.Router();

router.post('/auth/signup', validate.signup, signup);
router.post('/auth/signin', validate.signin, signin);

export default router;
