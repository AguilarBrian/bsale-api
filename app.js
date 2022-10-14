import { connectionPing } from './api/modules/pool-connection.js';
import routes from './api/index.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Set port depending on STATUS value (production or development).
let port;

if (process.env.STATUS === 'production') {
    port = process.env.PORT || 4000;
} else {
    port = process.env.DEV_PORT || 3000;
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1/', routes);

// Ping DB connection every 5 seconds.
setInterval(connectionPing, 5000)

app.listen(port, console.log(`Server running on ${port}`));
