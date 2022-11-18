import 
  export default async (app) => {
    app.get("/api/auth/login", userDetailsHandler)
    app.post("/api/auth/register", userLoginHandler);
    app.get("/user/invites", accountInvitesHandler);
  };

