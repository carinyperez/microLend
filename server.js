const express = require('express');
const Pool = require('pg').Pool; 
const path = require('path'); 
require('dotenv').config(); 

// connect to postgres database 
const devConfig = {
    host: process.env.PG_HOST, 
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PASSWORD
}
console.log(process.env.PG_HOST);

const proConfig =  {
    connectionString: process.env.DATABASE_URL
}

const pool = new Pool(
    process.env.NODE_ENV === 'production' ? proConfig : devConfig
);

// check connection 
pool.query('SELECT 1 + 1')
    .then((res)=> {
        console.log(res)
    })

const PORT = process.env.PORT || 5000; 
const app = express(); 

// app.use(express.urlencoded)({
//     extended: true
// })

// route handlers 
app.get('/users', async(req, res) => {
    const {rows} = await pool.query(`
        SELECT * FROM users; 
    `)
    res.send(rows); 
})

// Serve static assets in production 
if(process.env.NODE_ENV === 'production') {
    // Set static folder 
    app.use(express.static('client/build'));
    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname),'client', 'build', 'index.html')
    })
}
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})