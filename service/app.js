const express = require('../lib/express');
const app = module.exports = express();

const format = (path) =>  {
	const obj = require(path);
	return (req, res) => {
		res.format(obj);
	};
}

app.get('/articles', format('./get/articles'));
app.get('/articlesPaginator/:currentPage/:pageLength/', format('./get/articlesPaginator'));
app.get('/findArticlePage/:id/:pageLength', format('./get/findArticlePage'));
app.get('/findArticle/:id', format('./get/findArticle'));
app.get('/totalPages/:pagesLength',format('./get/totalPages'));


if (!module.parent) {
	app.listen(59666);
	console.log('Express started on port 59666');
}
