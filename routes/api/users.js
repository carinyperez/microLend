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
        console.log(req.body); 
        // validation errors 
        const errors = validationResult(req); 
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        const {username, email, password} = req.body;
        try {
            // see if user exists in postgres 
            let user = await pool.query(`
                SELECT * FROM users 
                WHERE email = $1  
            `, [email]) 
            if(user) {
                return res.status(400).json({errors:[{msg: 'User already exists'}]})
            }
            // encrypyt passsword 
            const salt = await bcrypt.genSalt(10); 
            password = await bcrypt.hash(password, salt); 
            // if no user create a new one 
            user = await pool.query(`
                INSERT INTO users(username, email, password)
                VALUES($1 $2 $3) RETURING * 
            `, [username, email, password])
            return res.send(user);
        } catch (error) {
            console.error(error.message); 
            res.status(500).send('Server error') 
        }
    }
)

module.exports = router; 