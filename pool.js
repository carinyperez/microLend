const Pool = require('pg').Pool; 
require('dotenv').config(); 

// connect to postgres database 
const devConfig = {
    host: process.env.PG_HOST, 
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PASSWORD
}

const pool = new Pool(
    process.env.NODE_ENV === 'production' ? proConfig : devConfig
);

// check connection 
pool.query('SELECT 1 + 1')
    .then((res)=> {
        console.log(res)
    })

module.exports = pool; 