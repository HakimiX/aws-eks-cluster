require('module-alias/register')
import express, { Request, Response } from 'express';
import { PORT } from './util/config';

const app = express();
const port = PORT || 4000;

app.get('/', async (req: Request, res: Response) => {
    res.json({status: 'healthy'});
});

app.listen(port, () => {
    console.log(`Server running on ${PORT}`);
});
