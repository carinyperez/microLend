const express = require('express'); 
const PORT = process.env.PORT || 3001; 
const app = express(); 

app.get('/api', (req, res) => {
    res.send('Hello from the server')
})
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
app.get("/", (request, response) => {
  response.sendFile("client/public/index.html", { root: __dirname });
});