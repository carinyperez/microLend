const express = require('express');
const path = require('path');
const pool = require('./pool');
const cors = require('cors'); 

// import routes 
const users = require('./routes/api/users'); 

const PORT = process.env.PORT || 5000; 
const app = express(); 

//middleware
app.use('*', cors()); 
// parses json requests 
app.use(express.json({extended: false}))

// define routes 
app.use('/api', users); 

// Serve static assets in production 
if(process.env.NODE_ENV === 'production') {
    // Set static folder 
    app.use(express.static('client/build'));
    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname),'client', 'build', 'index.html')
    })
}
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening on ${PORT}`)
})
