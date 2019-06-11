import 'dotenv/config';
import users from '../models/user';
import generateToken from '../middlewares/auth';
import { error } from '../middlewares/helpers';


export const signup = (req, res) => {
  const user = users.email(req.body.email)
    ? error(res, 409, 'email is already in use')
    : users.create({ ...req.body });

  const token = generateToken(user.id, user.email);

  res.status(201).json({
    status: 'success',
    message: `welcome, ${user.firstName}!`,
    data: {
      token,
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  });
};

export const signin = (req, res) => {
  const { email, password } = req.body;
  const existingUser = users.email(email.trim());
  if (!existingUser) {
    return error(res, 404, 'incorrect email or password');
  }

  const isUser = existingUser.password === password.trim();

  return isUser
    ? res.status(200).json({
      status: 'success',
      message: `welcome back, ${existingUser.firstName}!`,
      data: {
        token: generateToken(existingUser.id, existingUser.email),
        id: existingUser.id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
      },
    })
    : error(res, 404, 'incorrect email or password');
};
