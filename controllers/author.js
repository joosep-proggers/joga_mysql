// import database connection
const con = require('../utils/db');

// show author articles

const getAuthorArticles = (req, res) => {
	let authorQuery = `SELECT name from author WHERE id = ${req.params.id}`
	let author
	let articleQuery = `SELECT * from article WHERE author_id = ${req.params.id}`
	let articles
	con.query(authorQuery, (err, result) => {
		if (err) throw err;
		author = result
	})
	con.query(articleQuery, (err, result) => {
		if (err) throw err;
		articles = result
		res.render('author', {
			author: author,
			articles: articles
		})
	});
};

module.exports = {
	getAuthorArticles
};