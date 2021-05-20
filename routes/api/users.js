const express = require('express'); 
const router = express.Router(); 
const pool = require('../../pool')

// @route GET api/users
// @desc get users 
// @access public 
router.get('/users', async(req, res) => {
    const {rows} = await pool.query(`
        SELECT * FROM users; 
    `)
    res.send(rows); 
})

// @route POST api/users
// @desc register user 
// @access public 
router.post('/users', async(req, res) => {
    console.log(req.body);
    const username = req.body.username; 
    const email = req.body.email; 
    const password = req.body.password;
    const insertedUser = await pool.query(`
            INSERT INTO users(username, email, password)
            VALUES ($1, $2, $3) RETURNING * 
    `, [username, email, password]);
    res.send(insertedUser.rows); 
})

module.exports = router; 