

import { userService } from "../services/userService";
export const addUser = async (ctx) => {
  //ctx.header
  const data= ctx.body;
  userService(data);
}


export const login = (ctx) => {
  try {
      const user = findUserCredential(ctx.request.body.name);
      if (user.password == ctx.request.body.password) {
          const token = jwt.sign({ name: user.name }, "yash", { expiresIn: '7d' });
          ctx.status = 200;
          ctx.body = { token };
      }

  } catch (error) {
      ctx.status = error.statusCode;
      ctx.body = { "error": { name: error.name }}
  }
}