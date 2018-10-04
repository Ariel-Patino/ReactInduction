const articles = require('../../dataBase/db');

exports.json = (req, res) => {
	try {
		const currentPage = req.params.currentPage | 0;
		const pageLength = req.params.pageLength | 0;
		const totalPages = articles.length % pageLength ? Math.floor(articles.length/pageLength) + 1: Math.floor(articles.length/pageLength);
		const result = [];
		for(let index = currentPage * pageLength; index < (currentPage * pageLength) + pageLength; index++) {
			result.push(articles[index]);
		}
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json(error);
	}
};
