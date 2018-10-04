const articles = require('../../dataBase/db');

exports.json = (req, res) => {
	try {
	    const pagesCount = Math.floor(articles.length/Number(req.params.pagesLength));
		const result =  articles.length % req.params.pagesLength ?  pagesCount + 1: pagesCount;
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json(error);		
	}
};
