import { verifyUser } from "../middleware";
import { verifyGoogleToken } from '../middleware'
import { IUser, IUserAccountDetails } from "../src/services/userService";
import { Context, NotFoundError, ForbiddenError } from "@zopsmart/zode";
import { emailUserOnLogin } from "../src/services/emailService";
import {
  createUser,
  getAccountInvites,
  getLinkedAccountOfUsers,
  getUserByEmailId,

} from "../src/services/userService";
import { getAccountSuggestion } from "../src/services/accountservice";
import { rlog } from "../helper/logger";
export const userLoginHandler = async (ctx: Context) => {
  const userToken = ctx.state.headers["x-authenticated-token"];
  const payLoad: any = await verifyGoogleToken(ctx, userToken);
  const userDetails: IUser = await getUserByEmailId(payLoad.email, ctx).catch(async (err) => {
    if (err instanceof NotFoundError) {
      const userData = await createUser(payLoad, ctx);
      rlog.debug('user created successfully')
      emailUserOnLogin(ctx, payLoad)
      return userData;
    }
    rlog.error('error in creating the user')
    throw err;
  });
  const userAccountDetails: IUserAccountDetails = await getLinkedAccountOfUsers(userDetails.id, ctx);
  userDetails.userAccountDetails = userAccountDetails;
  rlog.debug('successfully retrieved userAccount Details')
  return userDetails;
}
export const accountInvitesHandler = async (ctx: Context) => {
  await verifyUser(ctx);
  const userDetails = ctx.state.userDetails;
  const invitedUserDetails = await getAccountInvites(userDetails.emailId, ctx);
  let suggestedAccounts = [];  
  if (!invitedUserDetails[0].length) {
    suggestedAccounts = await getAccountSuggestion(
      ctx,
      ctx.state.userDetails.emailId
    );
  }

  rlog.debug("retrieved invited user details");

  return {
    invites: invitedUserDetails[0],
    suggestions: suggestedAccounts,
  };
};
export const userDetailsHandler = async (ctx: Context) => {
  const userToken = ctx.state.headers["x-authenticated-token"];
  const payLoad: any = await verifyGoogleToken(ctx, userToken);
  const userDetails: IUser = await getUserByEmailId(payLoad.email, ctx).catch(async (err) => {
    if (err instanceof NotFoundError) {
      throw ForbiddenError
    }
    rlog.error('error in retrieving user Details')
    throw err;
  });
  rlog.debug('retrieved user details')
  return userDetails;
}