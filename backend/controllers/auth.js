#!/usr/bin/node

const bcrypt = require('bcrypt');
// const jwt = require('jwt');
const User = require('../model/user');

const LoginUser = async (req, res) => {
    /** Authorization Logic goes here */

    try {
        /** Get User Input */
        const { email, password } = req.body;

        // console.log(req.body);
        // res.send(req.body);

        /** Validate User input */
        if (!(email && password)) {
            res.status(400).send('All input is required');
        }

        /** Validate if user exists in Database */
        const user = await User.findOne({ email });

        // console.log(user);
        // res.send(user);
        
        if (!user) {
            console.log('No User Found. Please Register an account')
            // res.end('No User Found. Please Register an account')
        }
        
        if (user && (await bcrypt.compare(password, user.password))) {
            /** Create token */
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                { expiresIn: "2h" },
            )
        };

        /** Save user token */
        user.token = token;

        /** user */
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.end(err);
    }
    // console.log('Login route\n');
    // res.end('Login route');
};


const RegisterUser = async (req, res) => {
    /** New User Registration Logic */
    try {
        /** Get User input */
        const {
            first_name,
            last_name,
            email,
            password
        } = req.body;

        /** Validate User input */
        if (!(email && password && first_name && last_name)) {
            res.status(400).send("All input is required");
        }

        /** 
         * Check if user already exists
         * Validate if user exists in Database
         */
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(409).send("User Already Exists. Please Login");
        }

        /** Encrypt user Password */
        encryptedPassword = await bcrypt.hash(password, 10);


        /** Create User in Database */
        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword
        });


        /** Create Token */
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        /** Save User token */
        user.token = token;

        /** Return the new User */
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.end(err);
    }


};
module.exports = { LoginUser, RegisterUser };
