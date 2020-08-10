import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';

const router = express.Router();

router.post(
	'/api/users/signup',
	[
		body('email').isEmail().withMessage('email must be valid'),
		body('password')
			.trim()
			.isLength({ max: 20, min: 4 })
			.withMessage('password must be atleast 4 letters long'),
	],
	(req: Request, res: Response) => {
		console.log('im here');
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			console.log(errors.array());
			throw new RequestValidationError(errors.array());
		}

		const { email, password } = req.body;

		return res.send('hello wodsad');
	}
);

export { router as signupRouter };
