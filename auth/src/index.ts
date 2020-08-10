import express from 'express';
import 'express-async-errors';
import { json } from 'express';
import { signupRouter } from './routes/signup';
import { currentUserRouter } from './routes/current-user';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(signupRouter);
app.use(currentUserRouter);

app.all('*', () => {
	throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
	console.log('listening on 3000!');
});
