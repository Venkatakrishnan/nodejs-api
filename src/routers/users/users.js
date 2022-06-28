import express from 'express';
import {error, log} from '../../shared/logger';
import fs from 'fs';

export default jsonfilepath => {
	console.log('jsonfilepath=%s', jsonfilepath);
	const router = express.Router();
    // Reads from mock json file but has to be hooked upto database
    // Index call
	router.get('/', async (req, res, next) => {
	try {
	fs.readFile(jsonfilepath, 'utf8', async (err, fileContents) => {
	res.send(fileContents);
});
}catch (err) {
	next(err);
}
});
	return router;
}
;