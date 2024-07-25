const joi = require("joi");
module.exports.listingSchema = joi.object({
    listing: joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        location: joi.string().required(),
        country: joi.string().required(),
        price: joi.number().required().min(0),
        image: joi.string().allow("", null),
    }).required(),
});

module.exports.reviewSchema = joi.object({
    review: joi.object({
        rating: joi.number(). required().min(1).max(5),
        comment: joi.string().required(),
    }).required(),
});




// {
//   "engines": {
//      "node": "20.12.2"
//   },
//   "name": "wanderlust",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "@mapbox/mapbox-sdk": "^0.16.0",
//     "cloudinary": "^1.21.0",connect-mongo
//     "connect-flash": "^0.1.1",
//     "connect-mongo": "^5.1.0",
//     "dotenv": "^16.4.5",
//     "ejs": "^3.1.10",
//     "ejs-mate": "^4.0.0",
//     "express": "^4.19.2",
//     "express-session": "^1.18.0",
//     "joi": "^17.13.3",
//     "method-override": "^3.0.0",
//     "mongoose": "^8.4.5",
//     "multer": "^1.4.5-lts.1",
//     "multer-storage-cloudinary": "^4.0.0",
//     "passport": "^0.7.0",
//     "passport-local": "^1.0.0",
//     "passport-local-mongoose": "^8.0.0"
//   }
// }

//<!-- <% } %> --> line 59 from navbar.ejs
// //if(currUser) line 60
