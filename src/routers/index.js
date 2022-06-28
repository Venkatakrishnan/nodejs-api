import path from 'path';
import users from './users/users';

const jsonfilepath = path.join(__dirname, '../../db', 'mock', 'users.json');

export default app => {
	app.use('/users', users(jsonfilepath));
};
