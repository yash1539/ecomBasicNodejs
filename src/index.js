import koa from "koa"
import koaRouter from "koa-router"
const app = new koa();
const router = new koaRouter


app.use(router.routes()).use(router.allowedMethods());

app.listen(8000, () => {
    console.log("listening to 8000 port ecom");
})