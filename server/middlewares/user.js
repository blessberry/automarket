import isEmail from 'validator/lib/isEmail';
import { isInvalid, error } from './helpers';


const names = (req, res, next) => (
  isInvalid(req.body.firstName, 'first name', 20)
  || isInvalid(req.body.lastName, 'last name', 20)
    ? error(res, 422, 'invalid names')
    : next()
);

const email = (req, res, next) => (
  !req.body.email
    ? error(res, 422, 'email was not provided')
    : isEmail(req.body.email.trim())
      ? next()
      : error(res, 422, 'invalid email')
);

const password = (req, res, next) => (
  !req.body.password
    ? error(res, 422, 'password was not provided')
    : next()
);


export default {
  signup: [names, email, password],
  signin: [email, password],
};
