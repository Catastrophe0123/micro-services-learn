import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
	statusCode = 400;

	constructor(private errors: ValidationError[]) {
		super('Invalid request parameters');

		// since we are extending builtin class
		Object.setPrototypeOf(this, RequestValidationError.prototype);
	}

	serializeErrors = () => {
		return this.errors.map((err) => {
			return { message: err.msg, field: err.param };
		});
	};
}
