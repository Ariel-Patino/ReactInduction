const express = require('../lib/express');
const app = module.exports = express();

const format = (path) =>  {
	const obj = require(path);
	return (req, res) => {
		res.format(obj);
	};
}
//Retuns all articles
app.get('/articles', format('./get/articles'));
//Retuns the page of article
app.get('/findArticlePage/:id/:pageLength', format('./get/findArticlePage'));
//Return the article required according 
app.get('/findArticle/:id', format('./get/findArticle'));
//Returns total pages for articles
app.get('/totalPages/:pagesLength',format('./get/totalPages'));
//returns the especific page
app.get('/getPage/:page/:pagesLength',format('./get/getPage'));


if (!module.parent) {
	app.listen(59666);
	console.log('Express started on port 59666');
}
