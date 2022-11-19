import koaRouter from "koa-router"
export const router = new koaRouter



import { login,addUser } from "../handler/userHandler.js"
import { auth } from "../middleware/auth.js";
import { getAllProductsById,allOrder,addProducts,getSellerById,allSeller } from "../handler/sellerHandler.js";

router.post('/login', auth, login)
router.post('/user', addUser)

//buyer
router.get('/api/buyer/list-of-sellers',allSeller)
router.get('/api/buyer/seller-catalog/:seller_id',getSellerById)
router.post('/api/buyer/create-order/:seller_id',getAllProductsById)

//seller
router.post('/api/seller/create-catalog',addProducts)

//order
router.get('/api/seller/orders',allOrder)
