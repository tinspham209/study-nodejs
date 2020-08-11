const Course = require("../models/Course");

class SiteController {
	// [GET] /
	index(req, res) {
		// res.render("home");
		Course.find({}, function (err, courses) {
			if (!err) {
				return res.json(courses);
			}
			return res.status(400).json({ error: "Error!!!" });
		});
	}

	// [GET] /search
	search(req, res) {
		res.render("search");
	}
}

module.exports = new SiteController();
