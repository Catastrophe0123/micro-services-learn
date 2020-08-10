import express from 'express';
import { json } from 'express';

const app = express();
app.use(json());

app.listen(3000, () => {
	console.log('listening on 3000');
});