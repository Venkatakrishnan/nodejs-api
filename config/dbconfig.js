export default config = {
    user: 'dbuser' || process.env.DBUSER,
    host: 'database.server.com' || process.env.DBHOST,
    database: 'mydb' || process.env.DBNAME,
    password: 'secretpassword' || process.env.DBPWD,
    port: 5439 || process.env.DBPORT
}