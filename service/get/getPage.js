const articles = require('../../dataBase/db');

exports.json = (req, res) => {
	try {
		const result = [];
		const pageRequired = Number(req.params.page) * Number(req.params.pagesLength);
		console.log(pageRequired);
		console.log(pageRequired + Number(req.params.pagesLength));

		for (let index = pageRequired; index < pageRequired + Number(req.params.pagesLength); index++ ) {
			result.push(articles[index]);
		}

		res.setHeader('Access-Control-Allow-Origin','*');
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json(error);		
	}
};
