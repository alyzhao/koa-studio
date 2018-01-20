const koa = require('koa')
const app = new koa();
const route = require('koa-route');
const fs = require('fs');
const path = require('path');
const serverStatic = require('koa-static');

const index = ctx => {
	console.log(`${Date.now()} - ${ctx.request.method} - ${ctx.request.url} - ${ctx.request.path}`);
	ctx.response.type = 'html';
	ctx.response.body = '<h1>index</h1>';
}

app.use(route.get('/', index));

app.use(serverStatic(path.join(__dirname, './'))); 	// 设置静态资源的目录, 线上环境都是在 cdn 或者 oss 

app.listen(3000);
