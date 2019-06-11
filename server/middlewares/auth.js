import 'dotenv/config';
import jwt from 'jsonwebtoken';

export default (id, email) => jwt.sign({ id, email }, process.env.KEY, { expiresIn: 83500 });
