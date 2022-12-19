import express from 'express';

const router = express.Router();

require('./todo.routes')(router);


export default router