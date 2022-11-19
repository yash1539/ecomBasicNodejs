import { addProductsCatalogue,getAllOrder,getProductById,getuserById,getSeller } from "../services/sellerService";
export const allSeller = async()=>{
    const type = "Seller";
    getSeller(type);
}
export const getSellerById= (ctx)=>{
    const id= ctx.state.params;
    getuserById(id)
} 

export const getAllProductsById= (ctx)=>{
   const id= ctx.state.params;
   getProductById(id)

}

export const addProducts=(ctx)=>{
    const products= ctx.body;
    addProductsCatalogue(products)
}

export const allOrder= ()=>{
    getAllOrder()
}
