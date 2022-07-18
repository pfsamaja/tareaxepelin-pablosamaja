import axios from "axios";
import { AuthActions } from "../reducers/AuthReducer";
import store from "../store";

const client = axios.create();

client.interceptors.request.use((config) => {
  const token = store.getState().authReducer.token;
  if (token && config?.headers) {
    config.headers = {
      ...config?.headers,
      "x-auth-token": `${token}`,
    };
  }
  return config;
});

client.interceptors.response.use(
  (res) => res,
  (err) => {
    store.dispatch({ type: AuthActions.SetToken, payload: null });
    localStorage.removeItem("token");
    return Promise.reject(err);
  }
);

export default client;
