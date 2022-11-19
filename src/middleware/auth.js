import { findUserById } from "../services/user_service"
const auth = (ctx,next) => {
    let token = ctx.request.headers.authorization;
        try {
            token = token.split(" ");
            const decoded = (Object)(jwt.verify(token[1], process.env.SECRET_KEY));
            const user = findUserById(decoded.id);
            ctx.state.loginUserId = decoded.user;
            ctx.status = 200;
            next();
        } catch (error) {
            ctx.state = error.statusCode;
            console.log(error.statusCode);
            ctx.body = {
                "error": { name: error.name },
                "Description": "Unauthorised Access"
            }
        }
}

export { auth }