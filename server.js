const express = require('express');
const pg = require('pg'); 
const path = require('path'); 

// connect to postgres database 
const pool = new pg.Pool({
    host: 'localhost', 
    port: 5432,
    database: 'microLend',
    user:'carinyperez',
    password: ''
})

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