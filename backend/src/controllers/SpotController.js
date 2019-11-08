/**
 * SpotController.js - Controller with a bunch of methods
 */

const Spot = require("../models/Spot");
const User = require("../models/User");


module.exports = {
    //Search By tech
    async index (req, res) {
        const { tech } = req.query;
        const spots = await Spot.find({techs : tech}); 
        
        return res.json({spots});
    },
    //Spot registering
    async store (req, res) {
        const { filename } = req.file;
        //Dont forget - this is a shorthand to extract all constants from red.body
        const { company, techs, price} = req.body; 
        const { user_id } = req.headers;
        const user = await User.findById(user_id);
        console.log(user);
        if (!user) {
            return res.status(400).json({ error: 'INVALID_USER'});
        }
        const hasSpot = await Spot.findOne({company: company});
        if (hasSpot) {
            return res.status(400).json({error: "SPOT_ALREADY_REGISTERED"});
        }
        const spot = await Spot.create({
            user: user_id, 
            thumbnail: filename, 
            company: company, 
            //Search string, explode by commas and trim spaces
            techs: techs.split(',').map(tech => tech.trim()), 
            price: price
        });
        return res.json(spot)
    }
}