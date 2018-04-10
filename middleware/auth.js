const
	G = require('../helper/global'),
	C = require('../config/constants'),
	DBC = require('../config/dbConst'),
	conn = require('../config/connection')

module.exports = function (req, res, next) {
	let
		token = req.headers.token,
		duid = req.headers.duid,
		os = req.headers.os,
		platform = req.headers.platform,
		api_source = req.headers.api_source;
	if (token && duid && os && platform) {
		conn.query(
			`SELECT u.id as users_id, u.name,u.email, u.mobile, u.is_active from ${DBC.USER} as u 
			LEFT JOIN ${DBC.USER_AUTH} as ua
			ON u.id = ua.user_id
			WHERE ua.token = '${token}'
			AND	ua.duid = '${duid}'
			AND ua.os = '${os}'
			`, function (error, rows) {
				if (error) {
					G.getResponse(0, 'Error while fetching users auth ', error, null).then(function (r) {
						res.status(501).send(r);
					})
				} else {
					if (rows.length) {
						req.user = rows[0];
						next();
					} else {
						G.getResponse(0, 'Auth Faild multiple records found', null, null).then(function (r) {
							res.status(200).send(r);
						})
					}
				}
			}
		)
	} else {
		G.getResponse(0, 'API Auth failed', null, null).then(function (r) {
			res.status(501).send(r);
		})
	}
}