import uuidv4 from "uuid4"

export const userService = async (data) => {
  const user= {
    id: uuidv4(),
    name: data.name,
    password: data.password,
    type : data.type
  };
  const res = await ctx.database?.rawQuery(
    `INSERT INTO users ( id,name,password,type) VALUES (?,?,?,?)`,
    [
      user.id,
      user.name,
      user.password,
      user.type
    ]
  );
  return user;
};