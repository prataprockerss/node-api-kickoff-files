const
	C = require('../config/constants'),
	M = require('../models/index'),
	G = require('../helper/global')

exports.getHome = function (req, res) {
	let response = {
		title: 'index get Page',
	}
	G.getResponse(1, 'Error while fetching users auth ', null, response).then(function (r) {
		res.status(200).send(r);
	})
};
exports.postHome = function (req, res) {
	let response = {
		title: 'index post  Page',
	}
	G.getResponse(1, 'Error while fetching users auth ', null, response).then(function (r) {
		res.status(200).send(r);
	})
}

