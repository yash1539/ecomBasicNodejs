import 
  export default async (app) => {
    app.get("/api/buyer/list-of-sellers", userDetailsHandler)
    app.post("/api/buyer/create-order/:seller_id", userLoginHandler);
    app.get("/api/buyer/seller-catalog/:seller_id", accountInvitesHandler);
  };