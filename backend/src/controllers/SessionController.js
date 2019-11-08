/**
 * SessionController.js - Create user
 * Dont forget: 
 * available methods: index, show, store, update, destroy
 */

const User  = require("../models/User");
module.exports = {
    //Async/await into action =)
    async store(req, res) {
        const { email }  = req.body;
        let user = await User.findOne( {email: email} );
        if (!user) {
            user = await User.create({ email });
        }
        return res.json(user);
    }
};

