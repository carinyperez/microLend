const express = require('express'); 
const router = express.Router(); 
const pool = require('../../pool'); 
const {check, validationResult} = require('express-validator'); 
const bcrypt = require('bcryptjs');


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
router.post('/users',
    // validation 
    [
        // username cannot be empty 
        check('username', 'Username is required').not().isEmpty(),
        // email must be valid 
        check('email', 'A valid email is required').isEmail(),
        check('password', 'The password must have 6 or more characters').isLength({min: 6})
    ],
    async(req, res) => {
    // validation errors 
    const errors = validationResult(req); 
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const username = req.body.username; 
    const email = req.body.email; 
    const password = req.body.password;
    try {
        let user = await pool.query(`
            SELECT * FROM users 
            WHERE email = $1
        `, [email]) 
        if(user.rows.length !== 0) {
            return res.status(400).json({errors:[{msg: 'User already exists'}]})
        }
        user = await pool.query(`
        INSERT INTO users(username, email, password)
        VALUES($1,$2, $3) RETURNING *
        `,[username,email,password])  
        res.send(user.rows[0]); 
    } catch (error) {
        console.error(error)   
    } 
});


module.exports = router; 