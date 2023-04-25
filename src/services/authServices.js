import request from "~/utils/request";
import authSlice from "~/pages/Authentication/authSlice";
import config from "~/config";

export const loginUser = async (user, dispatch) => {
  dispatch(authSlice.actions.loginStart);
  try {
    const res = await request.post("users/login", user);
    dispatch(authSlice.actions.loginSuccess(res.data));
  } catch (error) {
    dispatch(authSlice.actions.loginFailed);
    console.log(error);
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(authSlice.actions.registerStart);
  try {
    const res = await request.post("users/addCustomer", user);
    dispatch(authSlice.actions.registerSuccess(res.data));
    if (res.data.account) {
      navigate(config.routes.login);
    }
  } catch (error) {
    dispatch(authSlice.actions.registerFailed());
    console.log(error);
  }
};

export const updateUser = async (idUser, userInfo, accessToken, dispatch) => {
  dispatch(authSlice.actions.updateStart);
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  try {
    const res = await request.put(
      "users/updateCustommer/" + idUser,
      userInfo,
      config
    );
    dispatch(authSlice.actions.updateSuccess(res.data));
  } catch (error) {
    dispatch(authSlice.actions.registerFailed());
    console.log(error);
  }
};
