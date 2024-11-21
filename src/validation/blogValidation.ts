// validation/blogValidation.ts
import { body } from 'express-validator';

export const createBlogValidation = [
  // Validate title field
  body('title')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters long'),

  // Validate content field
  body('content')
    .isString()
    .isLength({ min: 10 })
    .withMessage('Content must be at least 10 characters long')
];
