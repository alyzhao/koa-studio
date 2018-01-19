const koa = require('koa');
const fs = require('fs');
const app = new koa();

app.use(ctx => {
	ctx.response.type = 'html';
	console.log(ctx.request.path);
	if (ctx.request.path == '/test') {
		ctx.response.body = fs.createReadStream('./test.html');
	} else {
		ctx.response.body = '<h1>index</h1>';
	}
})

app.listen(3000);