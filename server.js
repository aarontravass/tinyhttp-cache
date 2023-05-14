import { App } from '@tinyhttp/app';
import { getWeatherByCity } from './weather.js';
import { lruSend } from 'lru-send';

const app = new App().use(lruSend());

app.get('/weather/search', async (req, res) => {
    const city = req.query.city;
    req.ip
    const cacheResult = await getWeatherByCity(city);
    return res.status(200).send(cacheResult);
})


app.listen(3000, () => console.log("Started listening on Port 3000"));
