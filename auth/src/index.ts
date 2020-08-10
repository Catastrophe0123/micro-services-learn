import express from 'express';
import { json } from 'express';

const app = express();
app.use(json());

app.get('/api/users/currentuser', (req, res) => {
	res.send('hello world boi ');
});

app.listen(3000, () => {
	console.log('listening on 3000!');
});
