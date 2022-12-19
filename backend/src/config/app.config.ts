import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());

export default app;