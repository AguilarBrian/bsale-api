import { connectionPing } from './api/modules/pool-connection.js';
import routes from './api/index.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
// Set port depending on STATUS value (production or development).
const port = process.env.STATUS === 'production' ? process.env.PROD_PORT : process.env.DEV_PORT;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

// Keep connection alive.
setInterval(connectionPing, 5000)

app.listen(port, console.log(`Server running on ${port}`));
