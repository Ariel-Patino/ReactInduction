const articles = require('../../dataBase/db');

exports.json = (req, res) => {
	try {
		const result = [];
		const pageLength = Number(req.params.pageLength);
	    const elementFOund = articles.find(articulo => articulo.id === req.params.id);
		const articleIndex = articles.indexOf( elementFOund);
		
		const page = articleIndex === -1 ? 0 : Math.floor(articleIndex / pageLength);
		for (let index = page *  pageLength; index <(page *  pageLength) + pageLength; index++) {
			result.push(articles[index]);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json(error);		
	}
};
