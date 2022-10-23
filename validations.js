import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Invalid mail form').isEmail(),
  body('password', 'Minimum password 5 characters').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Invalid mail form').isEmail(),
  body('password', 'Minimum password 5 characters').isLength({ min: 5 }),
  body('fullName', 'Enter a name').isLength({ min: 3 }),
  body('avatarUrl', 'Invalid avatar link').optional().isURL(),
];
export const postCreateValidation = [
  body('title', 'Enter article title').isLength({ min: 5 }).isString(),
  body('text', 'Enter article text').isLength({ min: 10 }).isString(),
  body('tags', 'Invalid tag format (enter an array)').optional().isString(),
  body('imageUrl', 'Invalid image link').optional().isString(),
];
