const articles = require('../../dataBase/db');

exports.json = (req, res) => {
	try {
		res.status(200).json(articles.find(articulo => articulo.id === req.params.id));
	} catch (error) {
		res.status(400).json(error);		
	}
};
