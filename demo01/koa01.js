const Koa = require('koa');
const app = new Koa();

app.use(async(ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set('X-Response-Time', `${ms}ms`);		// 自定义设置的一个 Response 头信息
})

app.use(async(ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}`);
})

app.use(async ctx => {
	ctx.body = 'Hello Koa';
})

app.listen(3000);