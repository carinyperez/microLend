const express = require('express');
const path = require('path');
const pool = require('./pool');

// import routes 
const users = require('./routes/api/users'); 

const proConfig =  {
    connectionString: process.env.DATABASE_URL, // heroku addons
    ssl: {    /* <----- Add SSL option */
        rejectUnauthorized: false,
    }
}

const PORT = process.env.PORT || 5000; 
const app = express(); 

// parses json requests 
app.use(express.json({extended: false}))

// define routes 
app.use('/api', users); 

app.get('/', (req, res) => {
    res.send('hello from the server')
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