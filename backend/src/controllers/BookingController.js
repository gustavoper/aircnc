/**
 * BookingController.js - A controller to our bookings.
 */
const Spot = require("../models/Spot");
const Booking = require("../models/Booking");

module.exports = {
    //Search by tech
    async store(req, res) {
         const {user_id } = req.headers;
         const {spot_id} = req.params;
         const {date} = req.body;

         const booking = await Booking.create({
            user: user_id,
            spot: spot_id, 
            date: date
         });

         //Return All other info about spots and user (name, image, etc)
         await booking.populate('spot').populate('user').execPopulate();
         return res.json(booking);
    }
}