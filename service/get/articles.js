const articles = require('../../dataBase/db');

exports.html = (req, res) => {
	res.send('<ul>' + articles.map( article => '<li>' + article.name + '</li>' ).join('') + '</ul>');
};

exports.text = (req, res) => {
	res.send(articles.map( article => '-' + article.name + '\n').join(''));
};

exports.json = (req, res) => {
	res.json(articles);
};
