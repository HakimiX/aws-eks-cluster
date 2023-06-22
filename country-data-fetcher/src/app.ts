require('module-alias/register')
import express, {Request, response, Response} from 'express';
import { PORT } from './util/config';
import {countryService} from './services/country.service'
import {consistsOfLetters} from "./util/util";

const app = express();
const port = PORT || 3000;

app.get('/', async (req: Request, res: Response ) => {
    res.json({status: 'healthy'})
});

app.get('/countries', async (req: Request, res: Response )=> {
    res.json(await countryService.getCountries())
});


app.get('/country/:id', async (req: Request, res: Response) => {
    try {
        const code = req.params.id;
        if (!code || !consistsOfLetters(code)) {
            return res.status(400).send('Country code must consist of letters only')
        }
        const response = await countryService.getCountry(code.toUpperCase())
        if (!response || !response.country === null) {
            return res.status(404).send('Country not found')
        } else {
            return res.json(response)
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

// Add this route to handle the case when :id is not provided
app.get('/country', (req: Request, res: Response) => {
    res.status(400).send('Country code is required');
});

app.listen(port, () => {
    console.log(`Server running on port ${PORT}`);
});
