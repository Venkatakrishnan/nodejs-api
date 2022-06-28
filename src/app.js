import express from 'express';
import cors from 'cors';
import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import compression from 'compression';
import os from 'os';
import swaggerJSDoc from 'swagger-jsdoc';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {error, log} from './shared/logger';
import appRoutes from './routers';

const app = express();
const port = process.env.PORT || 3001;
// Const swaggerSpec = swaggerJSDoc(options);

const staticFilePath = __dirname;

app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // For parsing application/x-www-form-urlencoded
app.set('port', port);
log('api starting up...');
/**
 * Executes when any unhandled rejection is caught at the process level
 * @constructor
 * @param  {event} 'unhandledRejection' - unhandledRejection event raised by node
 * @param  {OBJECT} err - The error object reported by node process
 */
process.on('unhandledRejection', err => {
	error(`unhandled-rejection: ${err}`);
	process.exit(1);
});
app.use(morgan('tiny'));
// For CORS headers and errors
app.use(cors());
/**
 * The root of the express framework api which gets called by the users.
 * @param  {string} '/' - The root path
 * @param  {OBJECT} req - The request
 * @param  {OBJECT} res - The response
 */
app.get('/', (req, res) => {
	res.send(`Welcome to art Api!\n This api is written in node.js & express framework.`);
});

// Placeholder for swagger spec

// load & listen all app routes
appRoutes(app);

/**
 * This handles any unhandled errors raised by the express middleware framework
 * @constructor
 * @param  {string} err - The error object reported by the express middleware
 * @param  {OBJECT} req - The request object
 * @param  {OBJECT} res - The response object
 * @param  {OBJECT} next - The next set of pipeline to execute once it exits the express framework.
 */
app.use((err, req, res, next) => {
	error(err.stack);
	res.status(500).send(`error: ${err}`);
});
/**
 * Starts listening for api calls at the specified port
 * @constructor
 * @param  {number} port - The port to which to listen to.
 */
app.listen(port, () => {
	const listeningPort = parseInt(port);
	log(`Find the server at port: ${listeningPort}`);
});
export default app;
