import {Client, Pool} from 'pg';
import config from '../config/dbconfig';

const pool = new Pool(config)

export default () =>{
    async function query(text, params) {
        return pool.query(text,params)
    }
}