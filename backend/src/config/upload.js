/**
 * Upload.js - Set of configs required by multer
 * 
 */
const multer = require("multer");
const path = require("path");

 module.exports = {
     storage: multer.diskStorage({
         //Path resolving. This avoids the use of ../../
         destination: path.resolve(__dirname, "..","..", "uploads"),
         filename: (req, file, cb) => {
             const ext = path.extname(file.originalname);
             const name = path.basename(file.originalname, ext);
             //preserves original filename
             cb(null, `${ name}-${Date.now()}${ext}`);
         }
     })
 };