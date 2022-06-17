const Movie = require('../models/Movie');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[get] (/) the fucking home page

    index(req, res, next) {

        Movie.find({})
            .then((Movie) => {
                // res.json(Movie)
                res.render('home', {
                    Movie: multipleMongooseToObject(Movie),
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
