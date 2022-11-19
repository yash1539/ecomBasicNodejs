const koa = require("koa")
const koaRouter = require("koa-router")
const app = new koa();
const router = new koaRouter
import { login } from "./handler/userHandler"
import { addUser } from "./handler/userHandler";
import { auth } from "./middleware/auth";
import { allSeller } from "./handler/sellerHandler";
import { getSellerById } from "./handler/sellerHandler";
import { getAllProductsById } from "./handler/sellerHandler";

router.post('/login', auth, login)
router.post('/user', addUser)

//buyer
router.get('/api/buyer/list-of-sellers',allSeller)
router.get('/api/buyer/seller-catalog/:seller_id',getSellerById)
router.post('/api/buyer/create-order/:seller_id',getAllProductsById)

//seller
router.post('/api/seller/create-catalog')

//order
router.get('/api/seller/orders',)

app.use(router.routes()).use(router.allowedMethods());

app.listen(8000, () => {
    console.log("listening to 8000 port ecom");
})