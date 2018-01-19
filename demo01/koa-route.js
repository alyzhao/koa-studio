const koa = require('koa')
const app = new koa();
const route = require('koa-route');
const fs = require('fs');
const path = require('path');
const serverStatic = require('koa-static');


const index = ctx => {
	ctx.response.type = 'html';
	ctx.response.body = '<h1>index</h1>';
}

const test = ctx => {
	ctx.response.type = 'html';
	ctx.response.body = fs.createReadStream('./test.html');
}

const redirect = ctx => {
	ctx.response.type = 'html';
	ctx.response.redirect('/test');
	ctx.response.body = '<h1>redirect</h1>'

}

app.use(route.get('/', index));
app.use(route.get('/test', test));
app.use(route.get('/redirect', redirect));

app.use(serverStatic(path.join(__dirname, './'))); 	// 设置静态资源的目录, 线上环境都是在 cdn 或者 oss 

app.listen(3000);