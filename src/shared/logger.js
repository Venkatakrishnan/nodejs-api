import debug from 'debug';
const appname = process.env.APP_NAME || 'app:expressApi'
// const logger = debug(appname)
// const errLogger = debug(`${appname}:error`)
export const error = debug(`${appname}:error`).error = console.error.bind(console)
export const log = debug(appname).log = console.log.bind(console)