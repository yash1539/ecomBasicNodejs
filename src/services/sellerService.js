export const getSeller = async (type) => {
    const res = await ctx.database?.rawQuery(
        "SELECT * FROM users where type = ?",
        [type]
    );
    if (!res[0]?.[0]) {
        rlog.error('no such user exists')
        throw new NotFoundError();
    }
    return res[0]?.[0];
};

export const getuserById = async (id) => {
    const res = await ctx.database?.rawQuery(
        "SELECT * FROM users where id = ?",
        [id]
    );
    return res;
}

export const getProductById = async (id) => {
    const res = await ctx.database?.rawQuery(
        "SELECT * FROM products where id = ?",
        [id]
    );
    return res;
}



export const addProductsCatalogue = async (products) => {
    const products = {
        name: products.name,
        price: products.price,
    };
    const res = await ctx.database?.rawQuery(
        "INSERT INTO products ( name,price) VALUES (?,?)",
        [
            products.name,
            products.price,
        ]
    );
    return user;
};

export const getAllOrder = async ()=>{
    const res = await ctx.database?.rawQuery(
        "SELECT * FROM orders",
    );
    return res;
}