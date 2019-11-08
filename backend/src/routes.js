/**
 * Routes.js - This big guy here will store all application routes.
 */

const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

//Controllers
const sessionController = require("./controllers/SessionController");
const spotController = require("./controllers/SpotController");
const dashboardController = require("./controllers/DashboardController");
const bookingController = require("./controllers/BookingController");

const routes = express.Router();

//We need to use the upload component to upload images into server
const upload = multer(uploadConfig);

//New user session
routes.post("/sessions", sessionController.store);

//Spots
routes.post("/spots", upload.single('thumbnail'), spotController.store);
routes.get("/spots", spotController.index);

//The dashboard shows all spots
routes.get("/dashboard", dashboardController.show);

//Chain route, book a reservation 
routes.post('/spots/:spot_id/bookings', bookingController.store);

module.exports = routes;