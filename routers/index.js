import users from './users/users';
import express from 'express';

let jsonfilepath = '.\\db\\mock\\users.json'

export default (app) =>{
    app.use("/users", users(jsonfilepath));
}