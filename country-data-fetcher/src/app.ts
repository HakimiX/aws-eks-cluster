require('module-alias/register')
import express, { Request, Response } from 'express';
import { PORT } from './util/config';
import {countryService} from './services/country.service'

const app = express();
const port = PORT || 3000;

app.get('/', async (req: Request, res: Response ) => {
    const response = await countryService.getCountries();
    res.json(response);
});

app.listen(port, () => {
    console.log(`Server running on port ${PORT}`);
});
