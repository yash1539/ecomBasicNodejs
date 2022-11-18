import 
  export default async (app) => {
    app.get("/api/seller/orders", userDetailsHandler)
    app.post("/api/seller/create-catalog", userLoginHandler);
  };

