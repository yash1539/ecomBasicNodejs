const koa = require("koa")
const koaRouter = require("koa-router")
const app = new koa();
const router = new koaRouter
import fetchUser from "./handler/userHandler"
import { addUser } from "./handler/userHandler";
router.get('/login',fetchUser)
router.post('/user',addUser)

//buyer
router.get('/api/buyer/list-of-sellers')
router.get('/api/buyer/seller-catalog/:seller_id')
router.post('/api/buyer/create-order/:seller_id')

//seller
router.post('/api/seller/create-catalog')

//order
router.get('/api/seller/orders',)

app.use(router.routes()).use(router.allowedMethods());

app.listen(8000, ()=>{
    console.log("listening to 8000 port ecom");
})