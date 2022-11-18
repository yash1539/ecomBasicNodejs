

import { userService } from "../services/userService";
export const addUser = async (ctx) => {
  const data= ctx.body;
  userService(data);
}

export const fetchUser = async (ctx) => {
  
}